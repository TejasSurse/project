import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../ui/SearchBar';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Implement search functionality
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when changing routes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-10 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <ChefHat className="mr-2 h-8 w-8 text-green-600" />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              SMART CHEFF<span className="text-green-600"> COMPANION</span>
            </span>
          </Link>

          <div className="hidden md:block md:w-1/3 lg:w-2/5">
            <SearchBar onSearch={handleSearch} />
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className={`text-sm font-medium ${
                    location.pathname === '/'
                      ? 'text-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className={`text-sm font-medium ${
                    location.pathname === '/categories'
                      ? 'text-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className={`text-sm font-medium ${
                    location.pathname === '/favorites'
                      ? 'text-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  Favorites
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-4 block md:hidden">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className={`block text-base font-medium ${
                    location.pathname === '/'
                      ? 'text-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className={`block text-base font-medium ${
                    location.pathname === '/categories'
                      ? 'text-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className={`block text-base font-medium ${
                    location.pathname === '/favorites'
                      ? 'text-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  Favorites
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;