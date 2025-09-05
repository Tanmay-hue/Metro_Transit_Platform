export interface FareOption {
  id: string;
  name: string;
  price: number;
  description: string;
  validityPeriod?: string;
}
export interface ZoneFare {
  fromZone: number;
  toZone: number;
  price: number;
}
export const fareOptions: FareOption[] = [{
  id: 'single',
  name: 'Single Ride',
  price: 2.75,
  description: 'Valid for one journey in any direction.'
}, {
  id: 'day',
  name: 'Day Pass',
  price: 10.0,
  description: 'Unlimited rides for one day.',
  validityPeriod: '24 hours'
}, {
  id: 'week',
  name: '7-Day Pass',
  price: 33.0,
  description: 'Unlimited rides for seven consecutive days.',
  validityPeriod: '7 days'
}, {
  id: 'month',
  name: '30-Day Pass',
  price: 127.0,
  description: 'Unlimited rides for thirty consecutive days.',
  validityPeriod: '30 days'
}, {
  id: 'senior_single',
  name: 'Senior/Disabled Single Ride',
  price: 1.35,
  description: 'Discounted fare for seniors (65+) and persons with disabilities.'
}, {
  id: 'student_single',
  name: 'Student Single Ride',
  price: 1.5,
  description: 'Discounted fare for students with valid ID.'
}, {
  id: 'airport',
  name: 'Airport Express',
  price: 7.75,
  description: 'Direct service to and from the airport.'
}];
// Zone-based pricing
export const zoneMap: Record<string, number> = {
  central: 1,
  downtown: 1,
  north: 2,
  east: 2,
  south: 2,
  west: 2,
  riverside: 3,
  parkside: 3,
  university: 3,
  market: 3
};
export const zoneFares: ZoneFare[] = [{
  fromZone: 1,
  toZone: 1,
  price: 2.25
}, {
  fromZone: 1,
  toZone: 2,
  price: 3.5
}, {
  fromZone: 1,
  toZone: 3,
  price: 4.75
}, {
  fromZone: 2,
  toZone: 2,
  price: 2.75
}, {
  fromZone: 2,
  toZone: 3,
  price: 3.75
}, {
  fromZone: 3,
  toZone: 3,
  price: 3.0
}];
export const calculateFare = (fromStationId: string, toStationId: string): number => {
  const fromZone = zoneMap[fromStationId];
  const toZone = zoneMap[toStationId];
  if (!fromZone || !toZone) return 0;
  // Sort zones to find the correct fare entry
  const [smallerZone, largerZone] = [fromZone, toZone].sort();
  const fare = zoneFares.find(fare => fare.fromZone === smallerZone && fare.toZone === largerZone);
  return fare ? fare.price : 0;
};