import { useState } from 'react';

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

function App() {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-pink-700 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 text-center mb-6">
          NBA Team & Season Selector
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
        {selectedTeam && selectedSeason && (
          <div className="bg-blue-50 p-4 rounded-lg text-center text-gray-800 border border-blue-200">
            <p className="text-lg font-semibold">You selected:</p>
            <p className="mt-1">
              <span className="font-bold">{selectedTeam}</span> in{' '}
              <span className="font-bold">{selectedSeason}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
