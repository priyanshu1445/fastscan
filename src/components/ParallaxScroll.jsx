import React from 'react';
import backgroundImage from '../assets/parallax.png';

const ParallaxScroll = () => {
  return (
    <div
      className="w-full h-[50vh] bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url(${backgroundImage})` }}
    >
      {/* You can add content here if needed */}
    </div>
  );
};

export default ParallaxScroll;
