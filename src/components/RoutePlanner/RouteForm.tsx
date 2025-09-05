import React from 'react';
import { ArrowRightIcon, CalendarIcon, ClockIcon, RefreshCwIcon } from 'lucide-react';
import { Station } from '../../data/stations';
interface RouteFormProps {
  origin: string;
  destination: string;
  departureTime: string;
  stations: Station[];
  setOrigin: (value: string) => void;
  setDestination: (value: string) => void;
  setDepartureTime: (value: string) => void;
}
const RouteForm: React.FC<RouteFormProps> = ({
  origin,
  destination,
  departureTime,
  stations,
  setOrigin,
  setDestination,
  setDepartureTime
}) => {
  // Get current time in HH:MM format for default value
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  // Swap origin and destination
  const swapStations = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };
  return <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Route Details</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-1">
            From
          </label>
          <select id="origin" value={origin} onChange={e => setOrigin(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option value="">Select origin station</option>
            {stations.map(station => <option key={station.id} value={station.id} disabled={station.id === destination}>
                {station.name}
              </option>)}
          </select>
        </div>
        <div className="flex justify-center">
          <button onClick={swapStations} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors" aria-label="Swap stations">
            <RefreshCwIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
            To
          </label>
          <select id="destination" value={destination} onChange={e => setDestination(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <option value="">Select destination station</option>
            {stations.map(station => <option key={station.id} value={station.id} disabled={station.id === origin}>
                {station.name}
              </option>)}
          </select>
        </div>
        <div>
          <label htmlFor="departure-time" className="block text-sm font-medium text-gray-700 mb-1">
            Departure Time
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <ClockIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input id="departure-time" type="time" value={departureTime} onChange={e => setDepartureTime(e.target.value)} defaultValue={getCurrentTime()} className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input id="date" type="date" defaultValue={new Date().toISOString().split('T')[0]} className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
      </div>
      <div className="pt-2">
        <button type="button" disabled={!origin || !destination} className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${!origin || !destination ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <ArrowRightIcon className="h-5 w-5 mr-2" />
          Find Routes
        </button>
      </div>
    </div>;
};
export default RouteForm;