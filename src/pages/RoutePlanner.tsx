import React, { useEffect, useState } from 'react';
import { stations } from '../data/stations';
import { routes } from '../data/routes';
import { calculateFare } from '../data/fares';
import RouteForm from '../components/RoutePlanner/RouteForm';
import RouteResults from '../components/RoutePlanner/RouteResults';
import TransitMap from '../components/RoutePlanner/TransitMap';
interface RouteOption {
  stations: string[];
  lines: string[];
  duration: number;
  transfers: number;
  fare: number;
}
const RoutePlanner = () => {
  const [origin, setOrigin] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [departureTime, setDepartureTime] = useState<string>('');
  const [routeOptions, setRouteOptions] = useState<RouteOption[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  // Find route options when origin and destination are selected
  useEffect(() => {
    if (origin && destination && origin !== destination) {
      findRoutes(origin, destination);
    } else {
      setRouteOptions([]);
    }
  }, [origin, destination]);
  const findRoutes = (from: string, to: string) => {
    setIsLoading(true);
    setError('');
    // Simulate API call with a timeout
    setTimeout(() => {
      try {
        // Find which lines connect the stations
        const originStation = stations.find(s => s.id === from);
        const destStation = stations.find(s => s.id === to);
        if (!originStation || !destStation) {
          throw new Error('Invalid stations selected');
        }
        // Find direct routes
        const directLines = originStation.lines.filter(line => destStation.lines.includes(line));
        // Generate route options
        const options: RouteOption[] = [];
        // Direct routes
        if (directLines.length > 0) {
          directLines.forEach(line => {
            const route = routes.find(r => r.id === line);
            if (route) {
              const originIndex = route.stations.indexOf(from);
              const destIndex = route.stations.indexOf(to);
              // Calculate simulated duration based on number of stops
              const numStops = Math.abs(destIndex - originIndex);
              const duration = numStops * 3 + Math.floor(Math.random() * 5); // 3 min per stop + random variation
              options.push({
                stations: route.stations.slice(Math.min(originIndex, destIndex), Math.max(originIndex, destIndex) + 1),
                lines: [line],
                duration,
                transfers: 0,
                fare: calculateFare(from, to)
              });
            }
          });
        }
        // Routes with one transfer
        if (options.length < 3) {
          // Find potential transfer stations
          originStation.lines.forEach(originLine => {
            destStation.lines.forEach(destLine => {
              if (originLine !== destLine) {
                // Find stations where we can transfer between these lines
                const transferStations = stations.filter(s => s.lines.includes(originLine) && s.lines.includes(destLine) && s.id !== from && s.id !== to);
                if (transferStations.length > 0) {
                  const transferStation = transferStations[0];
                  const originRoute = routes.find(r => r.id === originLine);
                  const destRoute = routes.find(r => r.id === destLine);
                  if (originRoute && destRoute) {
                    const stationsToTransfer = originRoute.stations.slice(originRoute.stations.indexOf(from), originRoute.stations.indexOf(transferStation.id) + 1);
                    const stationsFromTransfer = destRoute.stations.slice(destRoute.stations.indexOf(transferStation.id), destRoute.stations.indexOf(to) + 1);
                    // Combine routes, removing duplicate transfer station
                    const fullRoute = [...stationsToTransfer, ...stationsFromTransfer.slice(1)];
                    // Calculate duration
                    const duration = (fullRoute.length - 1) * 3 + 5 + Math.floor(Math.random() * 5); // 3 min per stop + 5 min transfer + random
                    options.push({
                      stations: fullRoute,
                      lines: [originLine, destLine],
                      duration,
                      transfers: 1,
                      fare: calculateFare(from, to)
                    });
                  }
                }
              }
            });
          });
        }
        // Sort by duration
        options.sort((a, b) => a.duration - b.duration);
        // Take top 3 options
        setRouteOptions(options.slice(0, 3));
        setIsLoading(false);
      } catch (err) {
        setError('Unable to find routes. Please try different stations.');
        setRouteOptions([]);
        setIsLoading(false);
      }
    }, 1000); // Simulate network delay
  };
  return <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Plan Your Journey
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <RouteForm origin={origin} destination={destination} departureTime={departureTime} stations={stations} setOrigin={setOrigin} setDestination={setDestination} setDepartureTime={setDepartureTime} />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow mb-8">
            <TransitMap origin={origin} destination={destination} routeOptions={routeOptions} stations={stations} routes={routes} />
          </div>
          <RouteResults routeOptions={routeOptions} isLoading={isLoading} error={error} stations={stations} routes={routes} />
        </div>
      </div>
    </div>;
};
export default RoutePlanner;