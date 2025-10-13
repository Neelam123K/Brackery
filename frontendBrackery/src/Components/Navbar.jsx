import React from 'react';
import Logo from '../assets/logo.png';
import { GiCakeSlice } from "react-icons/gi";

const Menus = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Services", link: "/services" }
];

function Navbar() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm shadow-md z-50 fixed top-0 left-0">
      <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-2xl font-bold text-orange-600">
          <a href="#" className="flex items-center gap-2">
            <img 
              src={Logo} 
              alt="Brackery Logo" 
              className="h-10 w-10 object-contain rounded-full" 
            />
            <span className="font-cursive italic">Brackery Hub</span>
          </a>
        </div>

        {/* Nav Links + Button */}
        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex items-center gap-6">
            {Menus.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.link}
                  className="text-brown-800 hover:text-orange-600 text-lg font-medium transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="flex items-center gap-2 bg-orange-700 text-white px-4 py-2 rounded-full hover:bg-orange-600 hover:scale-105 transition duration-300">
            Order
            <GiCakeSlice className="text-xl" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
