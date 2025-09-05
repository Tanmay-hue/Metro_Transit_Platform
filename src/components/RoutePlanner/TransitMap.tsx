import React, { useEffect, useRef } from 'react';
import { Station } from '../../data/stations';
import { Route } from '../../data/routes';
interface RouteOption {
  stations: string[];
  lines: string[];
  duration: number;
  transfers: number;
  fare: number;
}
interface TransitMapProps {
  origin: string;
  destination: string;
  routeOptions: RouteOption[];
  stations: Station[];
  routes: Route[];
}
const TransitMap: React.FC<TransitMapProps> = ({
  origin,
  destination,
  routeOptions,
  stations,
  routes
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Get route color by ID
  const getRouteColor = (id: string): string => {
    const route = routes.find(r => r.id === id);
    return route ? route.color : '#888888';
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw background
    ctx.fillStyle = '#f8f8f8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Define map boundaries
    const padding = 50;
    const mapWidth = canvas.width - padding * 2;
    const mapHeight = canvas.height - padding * 2;
    // Find min/max coordinates
    let minLat = Infinity,
      maxLat = -Infinity,
      minLng = Infinity,
      maxLng = -Infinity;
    stations.forEach(station => {
      const [lat, lng] = station.coordinates;
      minLat = Math.min(minLat, lat);
      maxLat = Math.max(maxLat, lat);
      minLng = Math.min(minLng, lng);
      maxLng = Math.max(maxLng, lng);
    });
    // Add some padding to the boundaries
    const latPadding = (maxLat - minLat) * 0.1;
    const lngPadding = (maxLng - minLng) * 0.1;
    minLat -= latPadding;
    maxLat += latPadding;
    minLng -= lngPadding;
    maxLng += lngPadding;
    // Convert geo coordinates to canvas coordinates
    const geoToCanvas = (lat: number, lng: number) => {
      const x = padding + (lng - minLng) / (maxLng - minLng) * mapWidth;
      const y = padding + (1 - (lat - minLat) / (maxLat - minLat)) * mapHeight;
      return [x, y];
    };
    // Draw routes
    routes.forEach(route => {
      ctx.beginPath();
      ctx.strokeStyle = route.color;
      ctx.lineWidth = 3;
      // Connect stations on this route
      for (let i = 0; i < route.stations.length - 1; i++) {
        const stationA = stations.find(s => s.id === route.stations[i]);
        const stationB = stations.find(s => s.id === route.stations[i + 1]);
        if (stationA && stationB) {
          const [x1, y1] = geoToCanvas(stationA.coordinates[0], stationA.coordinates[1]);
          const [x2, y2] = geoToCanvas(stationB.coordinates[0], stationB.coordinates[1]);
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
        }
      }
      ctx.stroke();
    });
    // Draw stations
    stations.forEach(station => {
      const [x, y] = geoToCanvas(station.coordinates[0], station.coordinates[1]);
      // Determine if this is origin, destination, or highlighted in a route
      const isOrigin = station.id === origin;
      const isDest = station.id === destination;
      const isHighlighted = routeOptions.some(option => option.stations.includes(station.id));
      // Station circle
      ctx.beginPath();
      ctx.arc(x, y, isOrigin || isDest ? 8 : 5, 0, Math.PI * 2);
      if (isOrigin) {
        ctx.fillStyle = '#2563EB'; // Blue for origin
      } else if (isDest) {
        ctx.fillStyle = '#16A34A'; // Green for destination
      } else if (isHighlighted) {
        ctx.fillStyle = '#6B7280'; // Gray for highlighted stations
      } else {
        ctx.fillStyle = '#E5E7EB'; // Light gray for regular stations
      }
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.stroke();
      // Station label
      if (isOrigin || isDest || isHighlighted) {
        ctx.font = 'bold 12px Arial';
        ctx.fillStyle = '#1F2937';
        ctx.textAlign = 'center';
        ctx.fillText(station.name, x, y - 15);
      }
    });
    // Draw active route if selected
    if (routeOptions.length > 0 && origin && destination) {
      const selectedRoute = routeOptions[0]; // Use first route option
      // Draw route path
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(79, 70, 229, 0.6)'; // Indigo with transparency
      ctx.lineWidth = 6;
      for (let i = 0; i < selectedRoute.stations.length - 1; i++) {
        const stationA = stations.find(s => s.id === selectedRoute.stations[i]);
        const stationB = stations.find(s => s.id === selectedRoute.stations[i + 1]);
        if (stationA && stationB) {
          const [x1, y1] = geoToCanvas(stationA.coordinates[0], stationA.coordinates[1]);
          const [x2, y2] = geoToCanvas(stationB.coordinates[0], stationB.coordinates[1]);
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
        }
      }
      ctx.stroke();
    }
  }, [origin, destination, routeOptions, stations, routes]);
  return <div className="p-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Transit Map</h3>
      <div className="relative h-80 w-full border border-gray-200 rounded-lg overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{
        width: '100%',
        height: '100%'
      }}></canvas>
        <div className="absolute bottom-4 left-4">
          <div className="bg-white bg-opacity-80 p-2 rounded shadow-sm">
            <div className="text-xs font-medium text-gray-700">Map Legend</div>
            <div className="flex flex-wrap gap-2 mt-1">
              {routes.map(route => <div key={route.id} className="flex items-center">
                  <div className="h-3 w-3 rounded-full mr-1" style={{
                backgroundColor: route.color
              }}></div>
                  <span className="text-xs">{route.name}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default TransitMap;