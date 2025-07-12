import { useState } from 'react';

const nbaTeams = [
  'Atlanta Hawks',
  'Boston Celtics',
  'Brooklyn Nets',
  'Charlotte Hornets',
  'Chicago Bulls',
  'Cleveland Cavaliers',
  'Dallas Mavericks',
  'Denver Nuggets',
  'Detroit Pistons',
  'Golden State Warriors',
  'Houston Rockets',
  'Indiana Pacers',
  'LA Clippers',
  'Los Angeles Lakers',
  'Memphis Grizzlies',
  'Miami Heat',
  'Milwaukee Bucks',
  'Minnesota Timberwolves',
  'New Orleans Pelicans',
  'New York Knicks',
  'Oklahoma City Thunder',
  'Orlando Magic',
  'Philadelphia 76ers',
  'Phoenix Suns',
  'Portland Trail Blazers',
  'Sacramento Kings',
  'San Antonio Spurs',
  'Toronto Raptors',
  'Utah Jazz',
  'Washington Wizards',
];

const seasons = Array.from({ length: 20 }, (_, i) => `${2023 - i}-${(2023 - i + 1).toString().slice(2)}`);

function App() {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">NBA Team & Season Selector</h1>

        <label className="block mb-2 font-medium">Select Team:</label>
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="w-full border border-gray-300 p-2 mb-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">-- Choose a team --</option>
          {nbaTeams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>

        <label className="block mb-2 font-medium">Select Season:</label>
        <select
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(e.target.value)}
          className="w-full border border-gray-300 p-2 mb-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">-- Choose a season --</option>
          {seasons.map((season) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>

        {selectedTeam && selectedSeason && (
          <div className="mt-6 text-center">
            <p className="text-lg">
              Showing stats for: <strong>{selectedTeam}</strong> in <strong>{selectedSeason}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
