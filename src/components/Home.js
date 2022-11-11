import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className="text-5xl font-outfit flex-1 flex overflow-y-auto justify-center items-center text-center p-10">
      <Typewriter
        options={{
          strings: ['Welcome!', 'Please use the Navigation Bar.'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Home;
