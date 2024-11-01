import React from 'react'


import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Grid Layout for Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Enjoy the luxury of our hotels with rooftop pools, offering stunning views, exceptional service, and unforgettable experiences. Your comfort and satisfaction are our top priority.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/about" className="hover:text-blue-500 transition duration-300">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-500 transition duration-300">Our Services</a></li>
              <li><a href="/rooms" className="hover:text-blue-500 transition duration-300">Rooms & Suites</a></li>
              <li><a href="/contact" className="hover:text-blue-500 transition duration-300">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-blue-500 transition duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Rooftop Ave, Cityscape, Country</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@rooftoppools.com</p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-500">© {new Date().getFullYear()} Hotels With Rooftop Pools. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
