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
        <div className="bg-white min-h-screen">
        {/* Header */}
        <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Hoop-Clips</h1>
            <nav className="flex items-center space-x-8">
                <a href="#browse" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">Browse</a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">About</a>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-200">
                Login
                </button>
            </nav>
            </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid justify-center content-center">
            <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900">
                    NBA Clips <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Redefined</span>
                </h2>
                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                    Discover legendary basketball moments from every NBA season since 2015. Powered by AI-driven recommendations.
                </p>
                <a href="#browse" className="inline-block">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105" onClick={routeChange}>
                    Explore Clips
                </button>
                </a>
            </div>
        </section>

        {/* Info Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-20" id="about">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-4xl font-bold mb-4 text-center text-slate-900">About Hoop-Clips</h3>
                <p className="text-center text-slate-600 mb-12 text-lg max-w-2xl mx-auto">Your ultimate destination for NBA play-by-play clips and intelligent recommendations</p>
                
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <img
                            src={hoopSS}
                            alt="Hoop-Clips Interface"
                            className="rounded-2xl shadow-2xl w-full object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold mb-4 text-slate-900">What We Do</h4>
                        <p className="text-slate-700 text-lg leading-relaxed mb-6">
                            Hoop-Clips is your comprehensive NBA play-by-play database featuring clips and clip data from every game dating back to the 2015-16 NBA season. 
                        </p>
                        <p className="text-slate-700 text-lg leading-relaxed">
                            What sets us apart is our intelligent recommendation system that discovers similar clips across all available NBA seasons, helping you explore and uncover plays you've never seen before.
                        </p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-10 text-white shadow-xl">
                    <h5 className="text-2xl font-bold mb-3">Get In Touch</h5>
                    <p className="text-gray-300 mb-6">
                        Have questions, suggestions, or want to contribute? We'd love to hear from you.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <a href="mailto:hello@hoop-clips.example" className="group">
                            <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <div className="text-orange-500 text-2xl">✉</div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="font-semibold group-hover:text-orange-400 transition-colors">hello@hoop-clips.example</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://twitter.com/hoop_clips" target="_blank" rel="noopener noreferrer" className="group">
                            <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <div className="text-orange-500 text-2xl">𝕏</div>
                                <div>
                                    <p className="text-sm text-gray-400">Twitter</p>
                                    <p className="font-semibold group-hover:text-orange-400 transition-colors">@hoop_clips</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/funnierThan24/hoop-clips" target="_blank" rel="noopener noreferrer" className="group">
                            <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-white/10 transition-all duration-200">
                                <div className="text-orange-500 text-2xl">⚙</div>
                                <div>
                                    <p className="text-sm text-gray-400">GitHub</p>
                                    <p className="font-semibold group-hover:text-orange-400 transition-colors">funnierThan24/hoop-clips</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </div>
  );
}
