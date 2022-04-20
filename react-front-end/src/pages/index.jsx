import StreetView from '../components/Maps/StreetView';
import Map from '../components/Maps/Map';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';
import Scoreboard from '../components/Maps/Scoreboard';

const Index = () => {

  const [result, setResult] = useState(true)

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  })

  if (!isLoaded) return <div>Loading...</div>
  if (loadError) return `Error loading maps: ${loadError}`;


  return (
    <>
      {result && <Scoreboard />}
      { !result && <GoogleMap
        id="example"
        mapContainerClassName="map-container"
        >
          <StreetView />
        </GoogleMap>}
      <Map />
    </>
  );
}

export default Index;


