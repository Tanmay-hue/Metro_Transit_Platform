export interface Route {
  id: string;
  name: string;
  color: string;
  stations: string[];
  frequency: {
    weekday: number;
    weekend: number;
  };
  firstTrain: {
    weekday: string;
    weekend: string;
  };
  lastTrain: {
    weekday: string;
    weekend: string;
  };
}
export const routes: Route[] = [{
  id: 'red',
  name: 'Red Line',
  color: '#E53E3E',
  stations: ['central', 'north', 'west', 'downtown', 'university'],
  frequency: {
    weekday: 5,
    // minutes between trains
    weekend: 10
  },
  firstTrain: {
    weekday: '05:00',
    weekend: '06:00'
  },
  lastTrain: {
    weekday: '00:30',
    weekend: '23:45'
  }
}, {
  id: 'blue',
  name: 'Blue Line',
  color: '#3182CE',
  stations: ['central', 'east', 'west', 'riverside', 'market'],
  frequency: {
    weekday: 6,
    weekend: 12
  },
  firstTrain: {
    weekday: '05:15',
    weekend: '06:15'
  },
  lastTrain: {
    weekday: '00:15',
    weekend: '23:30'
  }
}, {
  id: 'green',
  name: 'Green Line',
  color: '#38A169',
  stations: ['central', 'south', 'downtown', 'parkside', 'market'],
  frequency: {
    weekday: 7,
    weekend: 15
  },
  firstTrain: {
    weekday: '05:30',
    weekend: '06:30'
  },
  lastTrain: {
    weekday: '00:00',
    weekend: '23:15'
  }
}, {
  id: 'yellow',
  name: 'Yellow Line',
  color: '#ECC94B',
  stations: ['north', 'east', 'south', 'parkside', 'university'],
  frequency: {
    weekday: 8,
    weekend: 15
  },
  firstTrain: {
    weekday: '05:45',
    weekend: '06:45'
  },
  lastTrain: {
    weekday: '23:45',
    weekend: '23:00'
  }
}];