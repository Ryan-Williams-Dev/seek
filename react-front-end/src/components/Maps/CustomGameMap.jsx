import { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import mapStyles from '../../mapStyles';

const CustomGameMap = () => {
  
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  })
  const [center, setCenter] = useState({lat: 50, lng: 50})

  if (!isLoaded) return <div>Loading...</div>
  if (loadError) return `Error loading maps: ${loadError}`;

  const options = {
    styles: mapStyles,
  }

  return (
    <div>
      <GoogleMap 
    zoom={1}
    center={center}
    mapContainerClassName="map-container-full"
    options={options}
    // onClick={onMapClick}
    // onLoad={handleOnLoad}
    // onDragEnd={handleCenterChanged}
  ></GoogleMap>
    </div>
  );
}

export default CustomGameMap;
