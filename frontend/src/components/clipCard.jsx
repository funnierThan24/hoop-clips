import React from "react";
import { useNavigate } from "react-router-dom";

function ClipCard({ id, description, clip_url, players, teams, action }) {
  const navigate = useNavigate();
  const clip = {id : id, description : description, clip_url : clip_url, players : players, teams : teams, action : action}
  console.log(clip);
  const handleClick = () => {
    navigate(`/clip/${id}`, {state : {clipData : clip}});
  };

  return (
    <div onClick = {handleClick} style={{ cursor: 'pointer' }} className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-xl transition">
      <video className="w-full h-48 object-cover" src={clip_url} controls />
      <div className="p-4">

        <h2 className="font-semibold text-lg">{description}</h2>
        <p className="text-sm text-gray-500 mt-2">
          <strong>Players:</strong> {players && players.length ? players.join(", ") : "N/A"}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Teams:</strong> {teams && teams.length ? teams.join(", ") : "N/A"}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Action:</strong> {action}
        </p>
      </div>
    </div>
  );
}

export default ClipCard;
