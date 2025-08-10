import time
import firebase_admin
from firebase_admin import credentials, firestore
from nba_api.stats.endpoints import playbyplayv3, leaguegamelog, videoeventsasset
import pandas as pd

# =====================================
# CONFIG
# =====================================
FIREBASE_KEY_PATH = "db_population/firebase_key.json"  # Firebase Service Account Key
SEASONS = [str(year) for year in range(2016, 2017)]  # Last 10 seasons
RATE_LIMIT = 0.8  # Seconds between API calls

# Initialize Firebase
cred = credentials.Certificate(FIREBASE_KEY_PATH)
firebase_admin.initialize_app(cred)
db = firestore.client()

# =====================================
# Utility Functions
# =====================================

def get_games_for_season(season):
    """Fetch all regular season games for a given season using nba_api."""
    log = leaguegamelog.LeagueGameLog(season=season, season_type_all_star="Regular Season")
    games_df = log.get_data_frames()[0]
    return games_df["GAME_ID"].unique().tolist()

def get_event_clip_url(game_id, event_num):
    """Fetch the video clip URL for a specific event using videoeventsasset API."""
    try:
        asset = videoeventsasset.VideoEventsAsset(game_id, game_event_id=event_num)
        data = asset.get_normalized_dict()
        MP4url = data['Meta']['videoUrls'][0]['murl']
        return MP4url

    except Exception as e:
        print(f"Error fetching clip URL for game {game_id}, event {event_num}: {e}")
        return None

def store_clip_metadata(clip_metadata):
    """Store a single clip metadata entry in Firebase Firestore."""
    doc_ref = db.collection("clips").document(clip_metadata["clip_id"])
    doc_ref.set(clip_metadata)

# =====================================
# Main Script
# =====================================

def populate_nba_metadata():
    for season in SEASONS:
        print(f"\nProcessing season {season}...")
        game_ids = get_games_for_season(season)

        for game_id in game_ids:
            print(f"Fetching PBP for game {game_id}...")
            try:
                pbp = playbyplayv3.PlayByPlayV3(game_id=game_id)
                pbp_data = pbp.get_data_frames()[0]
                pbp_data_filtered = pbp_data[(pbp_data["actionType"] != "Free Throw") & (pbp_data["actionType"] != "Foul") & (pbp_data["videoAvailable"] != "0")]
                
                for _, row in pbp_data_filtered.iterrows():
                    event_num = row["actionNumber"]
                    clip_id = f'{row["gameId"]}_Q{row["period"]}_{row["clock"].replace(":", "-")}_{event_num}'

                    # Fetch clip URL using videoeventsasset API
                    clip_url = get_event_clip_url(row["gameId"], event_num)
                    time.sleep(RATE_LIMIT)  # Prevent API rate limit issues

                    clip_metadata = {
                        "action_id": row["actionId"],
                        "action_Type": row["actionType"],
                        "action_Number": row["actionNumber"],
                        "clip_id": clip_id,
                        "game_id": row["gameId"],
                        "season": season,
                        "shot_Distance": row["shotDistance"],
                        "shot_Result": row["shotResult"],
                        "period": int(row["period"]),
                        "clock": row["clock"],
                        "action": row.get("actionType", "unknown"),
                        "description": row.get("description", ""),
                        "players": [row["playerName"], row["playerNameI"]],
                        "teams": [row.get("teamTricode", None)],
                        "faiss_index": None,  # Will be updated after embedding insertion
                        "clip_url": clip_url if clip_url else "N/A"
                    }

                    store_clip_metadata(clip_metadata)

                print(f"✅ Game {game_id} processed ({len(pbp_data)} events)")
                time.sleep(RATE_LIMIT)
            except Exception as e:
                print(f"Error fetching PBP for game {game_id}: {e}")
                time.sleep(2)

if __name__ == "__main__":
    populate_nba_metadata()
    print("✅ Metadata + clip URLs population complete!")
