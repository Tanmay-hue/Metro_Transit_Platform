import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CalendarIcon, CreditCardIcon, ClockIcon, AlertCircleIcon } from 'lucide-react';
const HomePage = () => {
  return <div className="w-full">
      {/* Hero section */}
      <div className="w-full bg-cover bg-center h-96" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      backgroundBlendMode: 'overlay',
      backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }}>
        <div className="flex items-center justify-center h-full w-full">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Get Around the City with Ease
            </h1>
            <p className="text-xl md:text-2xl text-white mt-4">
              Fast, reliable, and affordable public transportation
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/plan" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Plan Your Journey
              </Link>
              <Link to="/fares" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-lg transition duration-300">
                View Fares
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Quick actions */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link to="/plan" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPinIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium">Plan Journey</h3>
              <p className="mt-2 text-sm text-gray-500">
                Find the best route between any two stations
              </p>
            </div>
          </Link>
          <Link to="/schedules" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full">
                <ClockIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium">Schedules</h3>
              <p className="mt-2 text-sm text-gray-500">
                View timetables for all metro lines
              </p>
            </div>
          </Link>
          <Link to="/fares" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-100 p-3 rounded-full">
                <CreditCardIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium">Fares & Passes</h3>
              <p className="mt-2 text-sm text-gray-500">
                Explore ticket options and pricing
              </p>
            </div>
          </Link>
          <a href="#service-updates" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-100 p-3 rounded-full">
                <AlertCircleIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium">Service Updates</h3>
              <p className="mt-2 text-sm text-gray-500">
                Check for delays and service changes
              </p>
            </div>
          </a>
        </div>
      </div>
      {/* Service updates */}
      <div id="service-updates" className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Service Updates
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-green-500 mr-3"></div>
                <h3 className="text-lg font-medium">Red Line</h3>
                <span className="ml-auto text-sm text-green-600 font-medium">
                  Good Service
                </span>
              </div>
            </div>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-yellow-500 mr-3"></div>
                <h3 className="text-lg font-medium">Blue Line</h3>
                <span className="ml-auto text-sm text-yellow-600 font-medium">
                  Minor Delays
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Expect delays of 5-10 minutes due to track maintenance between
                East Junction and Riverside.
              </p>
            </div>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-green-500 mr-3"></div>
                <h3 className="text-lg font-medium">Green Line</h3>
                <span className="ml-auto text-sm text-green-600 font-medium">
                  Good Service
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-green-500 mr-3"></div>
                <h3 className="text-lg font-medium">Yellow Line</h3>
                <span className="ml-auto text-sm text-green-600 font-medium">
                  Good Service
                </span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
      {/* Promo section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white">
                Download Our Mobile App
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Get real-time updates, plan your journey, and purchase tickets
                on the go.
              </p>
              <div className="mt-8 flex space-x-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                  <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.5 12.5c0-1.58-.4-3.05-1.08-4.33l3.66-3.66c1.13 1.55 1.97 3.35 2.42 5.29.45 1.93.45 3.92 0 5.84-.45 1.94-1.3 3.74-2.42 5.29l-3.66-3.66c.68-1.28 1.08-2.75 1.08-4.33zm-5 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-.71-5.71c-1.77-1.77-4.65-1.77-6.42 0-1.78 1.77-1.78 4.65 0 6.42l3.54 3.54c.78.78 2.05.78 2.83 0l3.54-3.54c1.78-1.77 1.78-4.65 0-6.42z" />
                  </svg>
                  App Store
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                  <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3v18h18V3H3zm14 10.5h-1.5V15H14v-1.5h-1.5V12H14v-1.5h1.5V12H17v1.5zm-9 0v-1h6v1h-6zm0 3v-1h3v1H8z" />
                  </svg>
                  Google Play
                </button>
              </div>
            </div>
            <div className="md:w-1/2 bg-blue-800 flex items-center justify-center p-8">
              <img src="https://images.unsplash.com/photo-1584824388174-7c0d908add50?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Mobile app" className="rounded-lg shadow-lg max-h-80" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HomePage;