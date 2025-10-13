import React from 'react';
import BannerImg from  "../assets/banner-cake.jpg"
const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-pink-300 to-orange-200 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div className="space-y-6 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brown-900 leading-tight">
            Celebrate Every Bite <br /> with <span className="text-orange-600 italic">Brackery</span>
          </h1>
          <p className="text-gray-700">
            Discover handcrafted cakes and pastries made with love. Perfect for every celebration!
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
            Explore Menu 🍰
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img 
            src={BannerImg} 
            alt="Delicious Cake" 
            className="w-[300px] sm:w-[400px] hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
