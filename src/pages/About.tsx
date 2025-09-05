import React from 'react';
import { MapIcon, PhoneIcon, MailIcon, ClockIcon, UsersIcon, ShieldIcon, AccessibilityIcon } from 'lucide-react';
const About = () => {
  return <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        About MetroTransit
      </h1>
      {/* Mission statement */}
      <div className="bg-blue-700 text-white rounded-lg shadow-xl overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-blue-100 text-lg">
              To provide safe, reliable, and accessible public transportation
              that enhances mobility, reduces congestion, and contributes to the
              environmental and economic vitality of our community.
            </p>
          </div>
          <div className="md:w-1/2 bg-blue-800 flex items-center justify-center p-8">
            <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Metro train" className="rounded-lg shadow-lg max-h-80" />
          </div>
        </div>
      </div>
      {/* History section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our History</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <p className="text-gray-600 mb-4">
              Founded in 1985, MetroTransit began with just two lines serving
              the downtown area. Over the decades, we've expanded to become the
              comprehensive transit network that serves millions of passengers
              annually.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-blue-600 text-4xl font-bold">1985</div>
                <p className="mt-2 text-gray-600">
                  MetroTransit founded with the Red Line, connecting 5 stations
                  in the downtown area.
                </p>
              </div>
              <div className="text-center">
                <div className="text-blue-600 text-4xl font-bold">1997</div>
                <p className="mt-2 text-gray-600">
                  Expansion to the suburbs with the addition of the Blue and
                  Green Lines.
                </p>
              </div>
              <div className="text-center">
                <div className="text-blue-600 text-4xl font-bold">2015</div>
                <p className="mt-2 text-gray-600">
                  Modernization program completed, including digital ticketing
                  and real-time tracking.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <img src="https://images.unsplash.com/photo-1565043534407-2306500922de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Historic metro train" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      {/* Key facts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900">4</div>
            <div className="mt-2 text-sm text-gray-600">Metro Lines</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900">10</div>
            <div className="mt-2 text-sm text-gray-600">Stations</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-600 mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900">20</div>
            <div className="mt-2 text-sm text-gray-600">
              Hours of Daily Service
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600 mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900">250K+</div>
            <div className="mt-2 text-sm text-gray-600">Daily Riders</div>
          </div>
        </div>
      </div>
      {/* Sustainability */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Sustainability
        </h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Environmental Commitment
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  MetroTransit is committed to reducing our environmental
                  footprint and helping our community achieve its climate goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm">
                        Electric and hybrid vehicles in our fleet
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm">Solar-powered stations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm">Water conservation systems</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm">
                        Recycling programs at all facilities
                      </p>
                    </div>
                  </div>
                </div>
                <p>
                  By choosing public transit, each rider helps reduce carbon
                  emissions and traffic congestion.
                </p>
              </div>
            </div>
            <div className="md:w-1/3 bg-green-50">
              <div className="p-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Environmental Impact
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        120K
                      </div>
                      <p className="text-sm text-gray-600">
                        Tons of CO₂ emissions reduced annually
                      </p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        30%
                      </div>
                      <p className="text-sm text-gray-600">
                        Reduction in energy use since 2010
                      </p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        75%
                      </div>
                      <p className="text-sm text-gray-600">
                        Of waste diverted from landfills
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
        <div className="bg-white rounded-lg shadow">
          <div className="md:grid md:grid-cols-2">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-3 text-gray-600">
                    <p>Customer Service: 1-800-555-METRO</p>
                    <p className="text-sm">Monday-Friday, 8am-8pm</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MailIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-3 text-gray-600">
                    <p>info@metrotransit.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-3 text-gray-600">
                    <p>Main Office: 123 Transit Plaza, Metro City</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <ClockIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-3 text-gray-600">
                    <p>Lost & Found Office Hours:</p>
                    <p className="text-sm">Monday-Friday, 10am-6pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input type="text" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default About;