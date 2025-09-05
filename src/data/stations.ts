export interface Station {
  id: string;
  name: string;
  lines: string[];
  coordinates: [number, number]; // [latitude, longitude]
  amenities: string[];
  accessible: boolean;
}
export const stations: Station[] = [{
  id: 'central',
  name: 'Central Station',
  lines: ['red', 'blue', 'green'],
  coordinates: [40.7128, -74.006],
  amenities: ['parking', 'bike_racks', 'restrooms', 'wifi'],
  accessible: true
}, {
  id: 'north',
  name: 'North Terminal',
  lines: ['red', 'yellow'],
  coordinates: [40.7328, -74.026],
  amenities: ['parking', 'bike_racks', 'wifi'],
  accessible: true
}, {
  id: 'east',
  name: 'East Junction',
  lines: ['blue', 'yellow'],
  coordinates: [40.7028, -73.986],
  amenities: ['bike_racks', 'wifi'],
  accessible: true
}, {
  id: 'south',
  name: 'South Plaza',
  lines: ['green', 'yellow'],
  coordinates: [40.6928, -74.016],
  amenities: ['parking', 'restrooms', 'wifi'],
  accessible: true
}, {
  id: 'west',
  name: 'West Heights',
  lines: ['red', 'blue'],
  coordinates: [40.7228, -74.046],
  amenities: ['parking', 'bike_racks'],
  accessible: false
}, {
  id: 'downtown',
  name: 'Downtown Metro',
  lines: ['red', 'green'],
  coordinates: [40.7078, -74.001],
  amenities: ['bike_racks', 'wifi', 'restrooms'],
  accessible: true
}, {
  id: 'riverside',
  name: 'Riverside',
  lines: ['blue'],
  coordinates: [40.7178, -73.996],
  amenities: ['parking', 'bike_racks', 'wifi'],
  accessible: true
}, {
  id: 'parkside',
  name: 'Parkside',
  lines: ['green', 'yellow'],
  coordinates: [40.7228, -73.986],
  amenities: ['bike_racks'],
  accessible: true
}, {
  id: 'university',
  name: 'University Station',
  lines: ['red', 'yellow'],
  coordinates: [40.7328, -74.006],
  amenities: ['parking', 'bike_racks', 'wifi', 'restrooms'],
  accessible: true
}, {
  id: 'market',
  name: 'Market Square',
  lines: ['blue', 'green'],
  coordinates: [40.7028, -74.026],
  amenities: ['bike_racks', 'wifi'],
  accessible: true
}];