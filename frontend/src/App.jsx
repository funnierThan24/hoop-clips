import { useState } from 'react';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
import Clips from './pages/Clips';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {
  return(
      <div className='app'>
        <Routes>
          {/* Redirect root to /teams */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/clips" element={<Clips />} />
          <Route path="/home" element={<Home />} />
          <Route path="/clip/:id" element={<VideoPage />} />
        </Routes>
      </div>
  ) 
}
export default App;