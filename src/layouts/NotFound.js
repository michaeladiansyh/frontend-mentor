import React from 'react';
import './notfound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 flex overflow-y-auto justify-center items-center font-outfit">
      <div className="flex flex-col relative">
        <h1 className="relative bottom-36 text-5xl font-bold">Whoops!</h1>
        <p className="relative bottom-32 font-semibold">
          Sorry, this page is not available or broken.
        </p>
        <div id="hero" className="text-5xl top-2/4">
          <h1>404</h1>
          <h1>404</h1>
          <h1>404</h1>
          <h1>404</h1>
          <h1>404</h1>
        </div>
        <button
          onClick={() => navigate('/')}
          className="bg-black text-white rounded-lg top-24 relative h-10">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
