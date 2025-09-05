import React, { useState } from 'react';
import { stations } from '../data/stations';
import { fareOptions, calculateFare, zoneMap } from '../data/fares';
import { InfoIcon, DollarSignIcon, CreditCardIcon, WalletIcon, PercentIcon } from 'lucide-react';
const FareInfo = () => {
  const [fromStation, setFromStation] = useState<string>('');
  const [toStation, setToStation] = useState<string>('');
  const [calculatedFare, setCalculatedFare] = useState<number | null>(null);
  const handleCalculate = () => {
    if (fromStation && toStation) {
      const fare = calculateFare(fromStation, toStation);
      setCalculatedFare(fare);
    }
  };
  return <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Fares & Passes</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Fare Calculator */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Fare Calculator
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="from-station" className="block text-sm font-medium text-gray-700 mb-1">
                  From
                </label>
                <select id="from-station" value={fromStation} onChange={e => setFromStation(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select origin station</option>
                  {stations.map(station => <option key={station.id} value={station.id}>
                      {station.name} (Zone {zoneMap[station.id]})
                    </option>)}
                </select>
              </div>
              <div>
                <label htmlFor="to-station" className="block text-sm font-medium text-gray-700 mb-1">
                  To
                </label>
                <select id="to-station" value={toStation} onChange={e => setToStation(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select destination station</option>
                  {stations.map(station => <option key={station.id} value={station.id}>
                      {station.name} (Zone {zoneMap[station.id]})
                    </option>)}
                </select>
              </div>
              <button onClick={handleCalculate} disabled={!fromStation || !toStation} className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${!fromStation || !toStation ? 'opacity-50 cursor-not-allowed' : ''}`}>
                Calculate Fare
              </button>
              {calculatedFare !== null && <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-800">
                      Standard Fare:
                    </span>
                    <span className="text-lg font-bold text-blue-800">
                      ${calculatedFare.toFixed(2)}
                    </span>
                  </div>
                </div>}
            </div>
          </div>
          {/* Zone Map */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Zone Information
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm">
                Our transit system uses a zone-based fare structure. Fares are
                calculated based on how many zones you travel through.
              </p>
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700">
                    Zone Map
                  </h3>
                </div>
                <div className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm text-gray-700">
                        Zone 1: City Center
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm text-gray-700">
                        Zone 2: Inner Suburbs
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"></div>
                      <span className="text-sm text-gray-700">
                        Zone 3: Outer Areas
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fare Options */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button className="w-1/3 py-4 px-1 text-center border-b-2 border-blue-500 font-medium text-sm text-blue-600">
                  Single Tickets
                </button>
                <button className="w-1/3 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  Passes
                </button>
                <button className="w-1/3 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  Discounts
                </button>
              </nav>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6">
                {fareOptions.map(option => <div key={option.id} className="border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {option.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            {option.description}
                          </p>
                          {option.validityPeriod && <p className="mt-1 text-xs text-gray-500">
                              Valid for: {option.validityPeriod}
                            </p>}
                        </div>
                        <div className="text-xl font-bold text-blue-600">
                          ${option.price.toFixed(2)}
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-md transition-colors">
                          Purchase
                        </button>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          {/* Payment methods */}
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Payment Methods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CreditCardIcon className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900">
                    Credit/Debit Cards
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Pay with any major credit or debit card at ticket machines
                    or online.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <WalletIcon className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900">
                    Metro Card
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Our reloadable card for faster access and automatic
                    discounts.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <DollarSignIcon className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900">Cash</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Accepted at ticket machines and ticket offices (exact change
                    recommended).
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <PercentIcon className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-gray-900">
                    Discount Programs
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Special rates for seniors, students, and frequent riders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default FareInfo;