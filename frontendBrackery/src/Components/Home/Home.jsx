import React from 'react';
import HeroImg from '../assets/cake.png'; // Make sure the path is correct

const Home = () => {
  return (
    <div className='min-h-[600px] bg-pink-400 text-white flex items-center justify-center'>
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">

          {/* Text Section */}
          <div className="order-2 sm:order-1 space-y-6">
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
              Craving? <span className='text-yellow-100 italic'>Brackery’s</span> Got You Covered
            </h1>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out hover:scale-105">
              Cake and Coffee
            </button>
          </div>

          {/* Image Section */}
          <div className='order-1 sm:order-2 flex justify-center relative'>
            <img 
              src={HeroImg} 
              alt="Cake" 
              className="w-[300px] sm:w-[400px] spin drop-shadow-xl"
            />

            {/* Top Left Badge */}
            <div className='bg-gradient-to-r from-orange-400 to-pink-600 absolute top-5 left-1 p-3 rounded-xl shadow-md'>
              <h1 className='text-white font-semibold'>Sweet and Delicious</h1>
            </div>

            {/* Bottom Right Badge */}
            <div className='bg-orange-700 absolute bottom-5 right-5 p-3 rounded-xl shadow-md'>
              <h1 className='text-white font-semibold'>Best Cakes</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
