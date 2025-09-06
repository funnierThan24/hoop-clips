import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function VideoPage() {
    const location = useLocation();
    const { clipData } = location.state;
    return (
        <div className="bg-[#f4f4f4] min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <Link to="/clips" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to Clips
            </Link>

            {/* Video */}
            <video className="w-full rounded-lg mb-6" src={clipData.clip_url} controls/>

            {/* Metadata */}
            <h2 className="text-2xl font-bold mb-4">{clipData.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <p><strong>Players:</strong> {clipData.players}</p>
                <p><strong>Teams:</strong> {clipData.teams}</p>
                <p><strong>Action:</strong> {clipData.action}</p>
                <p><strong>Game ID:</strong> {clipData.id}</p>
            </div>
        </div>
        </div>
    );
}
