import React, { useState } from 'react';
import { routes } from '../data/routes';
import { stations } from '../data/stations';
import { ClockIcon, CalendarIcon, FilterIcon } from 'lucide-react';
const Schedules = () => {
  const [selectedLine, setSelectedLine] = useState<string>('red');
  const [selectedDay, setSelectedDay] = useState<'weekday' | 'weekend'>('weekday');
  const [selectedStation, setSelectedStation] = useState<string>('');
  // Get the selected route
  const selectedRoute = routes.find(route => route.id === selectedLine);
  // Generate schedule times (mock data)
  const generateScheduleTimes = (route: (typeof routes)[0], day: 'weekday' | 'weekend', stationIndex: number) => {
    const times = [];
    // Parse first and last train times
    const firstTrain = route.firstTrain[day].split(':').map(Number);
    const lastTrain = route.lastTrain[day].split(':').map(Number);
    // Convert to minutes for easier calculation
    const firstTrainMinutes = firstTrain[0] * 60 + firstTrain[1];
    const lastTrainMinutes = lastTrain[0] * 60 + lastTrain[1] + (lastTrain[0] < firstTrain[0] ? 24 * 60 : 0);
    // Add station offset (2 minutes per station from the first station)
    const stationOffset = stationIndex * 2;
    // Generate times based on frequency
    let currentMinutes = firstTrainMinutes + stationOffset;
    while (currentMinutes <= lastTrainMinutes) {
      const hours = Math.floor(currentMinutes / 60) % 24;
      const minutes = currentMinutes % 60;
      times.push(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
      currentMinutes += route.frequency[day];
    }
    return times;
  };
  return <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Transit Schedules
      </h1>
      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
          <div className="flex-1">
            <label htmlFor="line-select" className="block text-sm font-medium text-gray-700 mb-1">
              Select Line
            </label>
            <div className="flex space-x-2">
              {routes.map(route => <button key={route.id} onClick={() => setSelectedLine(route.id)} className={`px-4 py-2 rounded-md text-white ${selectedLine === route.id ? 'ring-2 ring-offset-2 ring-gray-500' : ''}`} style={{
              backgroundColor: route.color
            }}>
                  {route.name}
                </button>)}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Day Type
            </label>
            <div className="flex space-x-2">
              <button onClick={() => setSelectedDay('weekday')} className={`px-4 py-2 rounded-md ${selectedDay === 'weekday' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                Weekday
              </button>
              <button onClick={() => setSelectedDay('weekend')} className={`px-4 py-2 rounded-md ${selectedDay === 'weekend' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                Weekend
              </button>
            </div>
          </div>
          <div className="flex-1">
            <label htmlFor="station-select" className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Station
            </label>
            <select id="station-select" value={selectedStation} onChange={e => setSelectedStation(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Stations</option>
              {selectedRoute && selectedRoute.stations.map(stationId => {
              const station = stations.find(s => s.id === stationId);
              return station ? <option key={station.id} value={station.id}>
                      {station.name}
                    </option> : null;
            })}
            </select>
          </div>
        </div>
      </div>
      {/* Schedule display */}
      {selectedRoute && <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold" style={{
            color: selectedRoute.color
          }}>
                {selectedRoute.name} Schedule
              </h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <ClockIcon className="h-5 w-5" />
                <span>
                  Every {selectedRoute.frequency[selectedDay]} minutes (
                  {selectedDay === 'weekday' ? 'Mon-Fri' : 'Sat-Sun'})
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Station
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    First Train
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Train
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sample Times
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {selectedRoute.stations.filter(stationId => !selectedStation || stationId === selectedStation).map((stationId, index) => {
              const station = stations.find(s => s.id === stationId);
              if (!station) return null;
              const scheduleTimes = generateScheduleTimes(selectedRoute, selectedDay, index);
              return <tr key={station.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-3 w-3 rounded-full mr-2" style={{
                      backgroundColor: selectedRoute.color
                    }}></div>
                            <div className="text-sm font-medium text-gray-900">
                              {station.name}
                            </div>
                          </div>
                          {station.accessible && <div className="ml-5 text-xs text-gray-500">
                              ♿ Wheelchair accessible
                            </div>}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {scheduleTimes[0]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {scheduleTimes[scheduleTimes.length - 1]}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex flex-wrap gap-2">
                            {scheduleTimes.slice(0, 5).map((time, i) => <span key={i} className="px-2 py-1 bg-gray-100 rounded-md">
                                {time}
                              </span>)}
                            {scheduleTimes.length > 5 && <span className="px-2 py-1 text-gray-400">
                                +{scheduleTimes.length - 5} more
                              </span>}
                          </div>
                        </td>
                      </tr>;
            })}
              </tbody>
            </table>
          </div>
        </div>}
      {/* Service notes */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Service Notes
        </h2>
        <div className="space-y-4 text-sm text-gray-600">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="ml-3">
              <p>
                <strong>Holiday Schedule:</strong> On public holidays, trains
                run on the weekend schedule.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <ClockIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="ml-3">
              <p>
                <strong>Schedule Adjustments:</strong> Times may vary slightly
                due to operational conditions. Please arrive at the station 5
                minutes before the scheduled departure time.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <FilterIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="ml-3">
              <p>
                <strong>Frequency:</strong> During peak hours (7:00-9:00 AM and
                4:30-6:30 PM on weekdays), trains may run more frequently than
                the listed schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Schedules;