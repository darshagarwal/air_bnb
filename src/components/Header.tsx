import React, { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-amber-600" />
            <span className="text-xl font-bold text-gray-900">HomeRevive</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
              Services
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
              Portfolio
            </a>
            <a href="#about" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
              About
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
              Reviews
            </a>
            <a href="#contact" className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium">
              Get Quote
            </a>
          </div>

          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-amber-600 font-medium">
                Services
              </a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-600 hover:text-amber-600 font-medium">
                Portfolio
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-amber-600 font-medium">
                About
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-amber-600 font-medium">
                Reviews
              </a>
              <a href="#contact" className="block mx-3 mt-4 bg-amber-600 text-white px-3 py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium text-center">
                Get Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;