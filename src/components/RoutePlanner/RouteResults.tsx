import React, { Fragment } from 'react';
import { Clock, ArrowRight, Repeat, DollarSign, ChevronRight, AlertCircle } from 'lucide-react';
import { Station } from '../../data/stations';
import { Route } from '../../data/routes';
interface RouteOption {
  stations: string[];
  lines: string[];
  duration: number;
  transfers: number;
  fare: number;
}
interface RouteResultsProps {
  routeOptions: RouteOption[];
  isLoading: boolean;
  error: string;
  stations: Station[];
  routes: Route[];
}
const RouteResults: React.FC<RouteResultsProps> = ({
  routeOptions,
  isLoading,
  error,
  stations,
  routes
}) => {
  // Get station name by ID
  const getStationName = (id: string) => {
    const station = stations.find(s => s.id === id);
    return station ? station.name : id;
  };
  // Get route color by ID
  const getRouteColor = (id: string) => {
    const route = routes.find(r => r.id === id);
    return route ? route.color : '#888888';
  };
  // Get route name by ID
  const getRouteName = (id: string) => {
    const route = routes.find(r => r.id === id);
    return route ? route.name : id;
  };
  if (isLoading) {
    return <div className="bg-white rounded-lg shadow p-6 flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">
            Finding the best routes for you...
          </p>
        </div>
      </div>;
  }
  if (error) {
    return <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center text-red-600 mb-4">
          <AlertCircle className="h-5 w-5 mr-2" />
          <h3 className="font-medium">Error</h3>
        </div>
        <p className="text-gray-600">{error}</p>
      </div>;
  }
  if (routeOptions.length === 0) {
    return <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Plan Your Journey
        </h3>
        <p className="text-gray-600">
          Select an origin and destination station to see available routes.
        </p>
      </div>;
  }
  return <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Available Routes</h3>
      {routeOptions.map((option, index) => <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
          {/* Route header */}
          <div className="bg-gray-50 px-6 py-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-lg font-medium text-gray-900">
                  Option {index + 1}
                </div>
                {option.transfers === 0 ? <span className="ml-3 px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    Direct
                  </span> : <span className="ml-3 px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                    {option.transfers} Transfer{option.transfers > 1 ? 's' : ''}
                  </span>}
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Details
              </button>
            </div>
          </div>
          {/* Route summary */}
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-gray-500">
                <Clock className="h-5 w-5 mr-2" />
                <span>{option.duration} min</span>
              </div>
              <div className="flex items-center text-gray-500">
                <DollarSign className="h-5 w-5 mr-1" />
                <span>${option.fare.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">
                  {getStationName(option.stations[0])}
                </div>
                <div className="text-xs text-gray-500">
                  Departs:{' '}
                  {new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
                </div>
              </div>
              <div className="flex-1 px-4">
                <div className="flex items-center">
                  {option.lines.map((line, i) => <Fragment key={i}>
                      {i > 0 && <Repeat className="h-4 w-4 mx-1 text-gray-400" />}
                      <div className="h-3 w-3 rounded-full mr-1" style={{
                  backgroundColor: getRouteColor(line)
                }}></div>
                      <span className="text-xs font-medium">
                        {getRouteName(line)}
                      </span>
                    </Fragment>)}
                </div>
              </div>
              <div className="flex-1 text-right">
                <div className="text-sm font-medium text-gray-900">
                  {getStationName(option.stations[option.stations.length - 1])}
                </div>
                <div className="text-xs text-gray-500">
                  Arrives:{' '}
                  {new Date(Date.now() + option.duration * 60000).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
                </div>
              </div>
            </div>
            {/* Stations list */}
            <div className="mt-4 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="flex flex-col items-center mr-3">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  <div className="h-10 w-0.5 bg-gray-300"></div>
                </div>
                <div>
                  <div className="font-medium">
                    {getStationName(option.stations[0])}
                  </div>
                  <div className="text-xs text-gray-500">Departure</div>
                </div>
              </div>
              {option.transfers > 0 && <div className="flex items-center">
                  <div className="flex flex-col items-center mr-3">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-10 w-0.5 bg-gray-300"></div>
                  </div>
                  <div>
                    <div className="font-medium">
                      {getStationName(option.stations[Math.floor(option.stations.length / 2)])}
                    </div>
                    <div className="text-xs text-gray-500">Transfer</div>
                  </div>
                </div>}
              <div className="flex items-center">
                <div className="flex flex-col items-center mr-3">
                  <div className="h-3 w-3 rounded-full bg-green-600"></div>
                </div>
                <div>
                  <div className="font-medium">
                    {getStationName(option.stations[option.stations.length - 1])}
                  </div>
                  <div className="text-xs text-gray-500">Arrival</div>
                </div>
              </div>
            </div>
          </div>
          {/* Route actions */}
          <div className="px-6 py-3 bg-gray-50 border-t flex justify-between">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
              Show all stops
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Select This Route
            </button>
          </div>
        </div>)}
    </div>;
};
export default RouteResults;