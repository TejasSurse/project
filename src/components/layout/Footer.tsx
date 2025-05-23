import React from 'react';
import { ChefHat, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 flex items-center">
              <ChefHat className="mr-2 h-8 w-8 text-green-500" />
              <span className="text-xl font-bold tracking-tight text-white">
                SMART CHEFF<span className="text-green-500"> COMPANION</span>
              </span>
            </Link>
            <p className="mb-4 text-sm text-gray-400">
              Your personal guide to delicious cooking with smart, easy-to-follow recipes for every skill level.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:info@smartcheffcompanion.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/breakfast" className="text-gray-400 hover:text-white transition-colors">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link to="/categories/lunch" className="text-gray-400 hover:text-white transition-colors">
                  Lunch
                </Link>
              </li>
              <li>
                <Link to="/categories/dinner" className="text-gray-400 hover:text-white transition-colors">
                  Dinner
                </Link>
              </li>
              <li>
                <Link to="/categories/dessert" className="text-gray-400 hover:text-white transition-colors">
                  Desserts
                </Link>
              </li>
              <li>
                <Link to="/categories/vegetarian" className="text-gray-400 hover:text-white transition-colors">
                  Vegetarian
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to our newsletter for new recipes, cooking tips, and exclusive content.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-md bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Smart Cheff Companion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;