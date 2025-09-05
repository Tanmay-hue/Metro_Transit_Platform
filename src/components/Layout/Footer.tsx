import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, ClockIcon, MapPinIcon, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MetroTransit</h3>
            <p className="text-gray-300 text-sm">
              Providing safe, reliable, and affordable public transportation to
              the community since 1985.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/plan" className="text-gray-300 hover:text-white">
                  Plan Journey
                </Link>
              </li>
              <li>
                <Link to="/fares" className="text-gray-300 hover:text-white">
                  Fares & Passes
                </Link>
              </li>
              <li>
                <Link to="/schedules" className="text-gray-300 hover:text-white">
                  Schedules
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                <span className="text-gray-300">1-800-555-METRO</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-4 w-4 mr-2" />
                <span className="text-gray-300">info@metrotransit.com</span>
              </li>
              <li className="flex items-center">
                <MapPinIcon className="h-4 w-4 mr-2" />
                <span className="text-gray-300">
                  123 Transit Plaza, Metro City
                </span>
              </li>
              <li className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-2" />
                <span className="text-gray-300">
                  Customer Service: 8am - 8pm
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-sm text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MetroTransit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;