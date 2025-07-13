import { useState } from "react";
import { useNavigate } from "react-router-dom";
const nbaTeams = [
  'Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets',
  'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets',
  'Detroit Pistons', 'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers',
  'LA Clippers', 'Los Angeles Lakers', 'Memphis Grizzlies', 'Miami Heat',
  'Milwaukee Bucks', 'Minnesota Timberwolves', 'New Orleans Pelicans', 'New York Knicks',
  'Oklahoma City Thunder', 'Orlando Magic', 'Philadelphia 76ers', 'Phoenix Suns',
  'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs',
  'Toronto Raptors', 'Utah Jazz', 'Washington Wizards',
];

const seasons = Array.from({ length: 20 }, (_, i) => `${2023 - i}-${(2023 - i + 1).toString().slice(2)}`);

export default function Team_Select(){
    const [selectedTeam, setSelectedTeam] = useState('');
    const [selectedSeason, setSelectedSeason] = useState('');
    const navigate = useNavigate();

    const toTeams = () => {
        if (selectedTeam && selectedSeason) {
        const teamEncoded = encodeURIComponent(selectedTeam);
        navigate(`/Players?team=${teamEncoded}&season=${selectedSeason}`);
    }
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-500 via-blue-800 to-white flex items-center justify-center p-6">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 text-center mb-6">
                    Hoop Clips ™
                </h1>

                {/* Team Dropdown */}
                <label className="block mb-2 text-sm font-medium text-gray-700">Select Team</label>
                <select
                    value={selectedTeam}
                    onChange={(e) => setSelectedTeam(e.target.value)}
                    className="w-full mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                <option value="">-- Choose a team --</option>
                {nbaTeams.map(team => (
                    <option key={team} value={team}>{team}</option>
                ))}
                </select>

                {/* Season Dropdown */}
                <label className="block mb-2 text-sm font-medium text-gray-700">Select Season</label>
                <select
                    value={selectedSeason}
                    onChange={(e) => setSelectedSeason(e.target.value)}
                    className="w-full mb-6 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                    <option value="">-- Choose a season --</option>
                    {seasons.map(season => (
                        <option key={season} value={season}>{season}</option>
                    ))}
                </select>

                {/* Display Selection */}
                
                <div className="text-center">
                    <button
                        onClick={toTeams}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
                    >
                        View Team
                    </button>
                </div>
                
      </div>
    </div>
  );
}