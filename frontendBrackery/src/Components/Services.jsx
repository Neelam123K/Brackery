import React from "react";
import { FaBirthdayCake, FaCoffee, FaTruck, FaGift } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaBirthdayCake className="text-4xl text-orange-500" />,
    title: "Custom Cakes",
    description: "Order personalized cakes for birthdays, weddings, and events.",
  },
  {
    id: 2,
    icon: <FaCoffee className="text-4xl text-orange-500" />,
    title: "Café Treats",
    description: "Enjoy freshly brewed coffee, cupcakes, muffins, and more.",
  },
  {
    id: 3,
    icon: <FaTruck className="text-4xl text-orange-500" />,
    title: "Fast Delivery",
    description: "Quick and safe doorstep delivery of your sweet cravings.",
  },
  {
    id: 4,
    icon: <FaGift className="text-4xl text-orange-500" />,
    title: "Gift Boxes",
    description: "Create customized dessert gift boxes for loved ones.",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-pink-50 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-brown-800 mb-6">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          From cakes to coffee, Brackery Hub offers everything to satisfy your cravings.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    
  );
};

export default Services;
