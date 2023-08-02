import React from 'react';

const ImageBanner = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <img
        src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Banner"
        className="w-full h-80 object-cover rounded"
      />

      {/* Banner Text and Button */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-left">
        <h2 className="text-4xl font-bold text-[#003d2a]">Grab upto 50% Off on Adidas</h2>
        <p className="text-[#003d2a] text-lg mt-4">Explore our latest collection</p>
        <button className="px-6 py-3 mt-6 text-white bg-[#003d2a] rounded-full hover:bg-[#003d2a] focus:outline-none focus:ring-2 focus:bg-[#003d2a] focus:ring-opacity-50">Shop Now</button>
      </div>
    </div>
  );
};

export default ImageBanner;
