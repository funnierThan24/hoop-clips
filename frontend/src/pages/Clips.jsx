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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">NBA Clips</h1>

      <InfiniteScroll
        dataLength={clips.length}
        next={fetchClips}
        hasMore={hasMore}
        loader={<h4 className="text-center">Loading...</h4>}
        endMessage={<p className="text-center text-gray-500">No more clips</p>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clips.map((clip) => (
            <ClipCard
              key={clip.clip_id}
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
  );
}

export default ClipsPage;
