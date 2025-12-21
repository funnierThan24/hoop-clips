import React, { useState, useEffect } from "react";
import ClipCard from "../components/clipCard";
import InfiniteScroll from "react-infinite-scroll-component";


function ClipsPage() {
  const [clips, setClips] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const LIMIT = 20;

  const fetchClips = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/clips?limit=${LIMIT}&offset=${offset}`);
      const data = await response.json();

      if (data.length < LIMIT) {
        setHasMore(false);
      }

      setClips((prev) => [...prev, ...data]);
      setOffset((prev) => prev + LIMIT);
    } catch (error) {
      console.error("Error fetching clips:", error);
    }
  };

  useEffect(() => {
    fetchClips();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Hoop-Clips</h1>
          <a href="/" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">← Back to Home</a>
        </div>
      </header>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-2">NBA Clips</h2>
            <p className="text-lg text-slate-600">Explore legendary basketball moments from the 2015-16 season onwards</p>
          </div>

          <InfiniteScroll
            dataLength={clips.length}
            next={fetchClips}
            hasMore={hasMore}
            loader={
              <div className="flex justify-center col-span-full py-8">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            }
            endMessage={
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-slate-600 font-semibold">🏀 You've reached the end of the clips</p>
              </div>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clips.map((clip) => (
                <ClipCard
                  className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  key={clip.clip_id}
                  id={clip.clip_id}
                  description={clip.description}
                  clip_url={clip.clip_url}
                  players={clip.players}
                  teams={clip.teams}
                  action={clip.action}
                />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default ClipsPage;
