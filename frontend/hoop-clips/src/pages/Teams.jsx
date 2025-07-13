// src/pages/Players.jsx
import { useSearchParams } from 'react-router-dom';

export default function Players() {
  const [searchParams] = useSearchParams();
  const team = searchParams.get('team');
  const season = searchParams.get('season');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Player Page</h1>
        {team && season ? (
          <p className="text-gray-700">
            Showing players for <strong>{team}</strong> in season <strong>{season}</strong>.
          </p>
        ) : (
          <p className="text-red-500">Missing team or season selection.</p>
        )}
      </div>
    </div>
  );
}
