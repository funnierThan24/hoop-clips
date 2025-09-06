import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hoopSS from './hoopSS.png';

export default function LandingPage() {
    const [clips, setClips] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const limit = 20;
    const navigate = useNavigate()

    const routeChange = () =>{ 
        let path = '/clips'; 
        navigate(path);
    }

    return (
        <div className="bg-[#e9b189] min-h-screen">
        {/* Header */}
        <header className="bg-[#5e5451] text-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold">Hoop-Clips 2025</h1>
            <nav className="flex items-center space-x-6">
                <a href="#browse" className="hover:underline">Browse</a>
                <a href="#about" className="hover:underline">About</a>
                <button className="bg-gray-600 px-4 py-1 rounded text-sm hover:bg-gray-500">
                Login
                </button>
            </nav>
            </div>
        </header>

        <section className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold mb-6">
            Hoop-Clips NBA clip <br /> database
            </h2>
            <a href="#browse">
            <button className="bg-black text-white px-6 py-3 rounded text-lg hover:bg-gray-800" onClick={routeChange}>
                Browse
            </button>
            </a>
        </section>

        {/* Clips Section */}
        <section id="browse" className="max-w-7xl mx-auto px-6">
            <h3 className="text-center text-xl font-semibold mb-6">NBA Clips</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {clips.map((clip) => (
                <div key={clip.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <video className="w-full" controls poster={clip.thumbnail_url}>
                    <source src={clip.video_url} type="video/mp4" />
                </video>
                <div className="p-3">
                    <h4 className="font-semibold text-sm">{clip.title}</h4>
                    <p className="text-xs"><strong>Players:</strong> {clip.players.join(", ")}</p>
                    <p className="text-xs"><strong>Teams:</strong> {clip.teams.join(" vs ")}</p>
                    <p className="text-xs"><strong>Action:</strong> {clip.action}</p>
                </div>
                </div>
            ))}
            </div>

            {/* View More */}
            <div className="flex justify-center mt-6">
            <button
                disabled={loading}
                className="bg-[#5e5451] text-white px-6 py-2 rounded hover:bg-[#463f3c] disabled:opacity-50"
            >
                {loading ? "Loading..." : "View More"}
            </button>
            </div>
        </section>

        {/* Info Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 justify-center" id="about">
            <h3 className="text-2xl font-bold mb-8">Section heading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="container mx-auto items-center object-center">
                    <img
                        src={hoopSS}
                        class="container max-w-screen-lg mx-auto w-max object-center justify-center"
                    />
                    <h4 className="font-semibold mt-4">Subheading</h4>
                    <p className="text-sm text-gray-700">
                        Body text for whatever you'd like to share more.
                    </p>
                </div>
            </div>
        </section>
        </div>
  );
}
