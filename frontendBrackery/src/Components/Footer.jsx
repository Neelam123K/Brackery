import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-700 pt-10 pb-6 px-6 sm:px-12 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">

        {/* Logo Section */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Brackery Hub</h2>
          <p className="text-sm">
            Your one-stop destination for the most delicious cakes and treats. Baked with love.
          </p>
        </div>

        {/* Footer Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Home</h3>
          <ul>
            <li><a href="/" className="hover:text-orange-500">Main</a></li>
            <li><a href="/" className="hover:text-orange-500">Menu</a></li>
            <li><a href="/" className="hover:text-orange-500">Offers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">About</h3>
          <ul>
            <li><a href="/about" className="hover:text-orange-500">Our Story</a></li>
            <li><a href="/about" className="hover:text-orange-500">Team</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Services</h3>
          <ul>
            <li><a href="/services" className="hover:text-orange-500">Custom Cakes</a></li>
            <li><a href="/services" className="hover:text-orange-500">Online Delivery</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <ul>
            <li>📞 000-000-0000</li>
            <li><a href="/contact" className="hover:text-orange-500">Contact Form</a></li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center mt-10 space-x-4">
        <a href="#" className="text-orange-500 hover:text-orange-700 text-xl"><FaFacebookF /></a>
        <a href="#" className="text-orange-500 hover:text-orange-700 text-xl"><FaInstagram /></a>
        <a href="#" className="text-orange-500 hover:text-orange-700 text-xl"><FaTwitter /></a>
        <a href="#" className="text-orange-500 hover:text-orange-700 text-xl"><FaPinterestP /></a>
        <a href="#" className="text-orange-500 hover:text-orange-700 text-xl"><FaYoutube /></a>
      </div>

      {/* Bottom text */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Brackery Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
