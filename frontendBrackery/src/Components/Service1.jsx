import React from 'react';
import Img1 from '../assets/image.png'; // 🖼️ Ensure the image exists

// Service data with actual image reference
const ServiceData = [
  {
    id: 1,
    Img: Img1,
    title: "Chocolate Cake",
    description: "Indulge in our rich and moist chocolate cake, perfect for any occasion.",
  },
  {
    id: 2,
    Img: Img1,
    title: "Chocolate Cake",
    description: "Indulge in our rich and moist chocolate cake, perfect for any occasion.",
  },
  {
  id: 3,
    Img: Img1,
    title: "Chocolate Cake",
    description: "Indulge in our rich and moist chocolate cake, perfect for any occasion.",
    }
];

const Service1 = () => {
  return (
    <div className="py-16 bg-pink-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-brown-800 mb-4">
            Best Cakes Just For You 🍰
          </h1>
          <p className="text-gray-600 text-lg">
            Crafted with love, served with joy!
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {ServiceData.map((data, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 text-center"
            >
              <img
                src={data.Img}
                alt={data.title}
                className="w-32 h-32 mx-auto mb-6 object-cover rounded-full border-4 border-orange-200"
              />
              <h3 className="text-xl font-bold text-orange-600 mb-2">{data.title}</h3>
              <p className="text-gray-600 text-sm">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service1;
