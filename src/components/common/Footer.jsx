// src/components/common/Footer.jsx
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#FF9B50] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-white font-bold text-xl">ColorSplash</span>
            </div>
            <p className="text-gray-300 text-sm">
              Premium quality paints for your dream home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#FF9B50] transition">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-[#FF9B50] transition">Products</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#FF9B50] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-300">
                <FaPhone size={16} /> <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <MdEmail size={16} /> <span>info@colorsplash.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <FaMapMarkerAlt size={16} /> <span>Lahore, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-[#FF9B50] transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-[#FF9B50] transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-[#FF9B50] transition">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          © 2026 ColorSplash Paints. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;