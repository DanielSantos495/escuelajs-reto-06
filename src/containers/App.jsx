import React from 'react';
import MapContainer from '../components/MapContainer';
import '../styles/containers/App.styl';

const App = () => {
  const coord = [
    {
      venueLat: 19.42672619,
      venueLon: -99.1718706,
      venueName: 'Platzi HQ CDMX',
    },
    {
      venueLat: 4.6560716,
      venueLon: -74.0595918,
      venueName: 'Platzi HQ Bogota',
    },
  ];

  return (
    <div className="App">
      <MapContainer coord={coord} />
    </div>
  );
};

export default App;
