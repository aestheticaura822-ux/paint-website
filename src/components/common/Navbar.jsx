// src/components/common/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1E2A5A] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#FF9B50] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              ColorSplash
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-[#FF9B50] transition">Home</Link>
            <Link to="/products" className="text-white hover:text-[#FF9B50] transition">Products</Link>
            <Link to="/contact" className="text-white hover:text-[#FF9B50] transition">Contact</Link>
          </div>

          {/* Right Icons - Cart Removed */}
          <div className="flex items-center space-x-4">
            <Link to="/admin/login" className="text-white hover:text-[#FF9B50] transition">
              <LogIn size={24} />
            </Link>
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block text-white hover:text-[#FF9B50] py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/products" className="block text-white hover:text-[#FF9B50] py-2" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/contact" className="block text-white hover:text-[#FF9B50} py-2" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;