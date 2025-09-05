import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, TrainIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <TrainIcon className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">MetroTransit</span>
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-blue-800">
              Home
            </Link>
            <Link to="/plan" className="px-3 py-2 rounded-md hover:bg-blue-800">
              Plan Journey
            </Link>
            <Link to="/fares" className="px-3 py-2 rounded-md hover:bg-blue-800">
              Fares
            </Link>
            <Link to="/schedules" className="px-3 py-2 rounded-md hover:bg-blue-800">
              Schedules
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md hover:bg-blue-800">
              About
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-blue-900" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/plan" className="block px-3 py-2 rounded-md hover:bg-blue-900" onClick={toggleMenu}>
              Plan Journey
            </Link>
            <Link to="/fares" className="block px-3 py-2 rounded-md hover:bg-blue-900" onClick={toggleMenu}>
              Fares
            </Link>
            <Link to="/schedules" className="block px-3 py-2 rounded-md hover:bg-blue-900" onClick={toggleMenu}>
              Schedules
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-blue-900" onClick={toggleMenu}>
              About
            </Link>
          </div>
        </div>}
    </nav>;
};
export default Navbar;