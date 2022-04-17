import { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import mapStyles from "../../mapStyles";

export default function Map() {
  const [markers, setMarkers] = useState([]);
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  });

  if (!isLoaded) return <div>Loading...</div>;
  if (loadError) return `Error loading maps: ${loadError}`;

  const options = {
    styles: mapStyles
  }

  return <GoogleMap 
    zoom={2.5}
    center={{lat: 50, lng: 50}}
    mapContainerClassName="map-container"
    options={options}
    onClick={(event) => {
      setMarkers( current => [...current, {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date()
      }])
      console.log("Markers:", markers)
    }}
  >
    {markers.map((marker) => (
    <Marker 
      key={marker.time.toISOString()}
      position={{ lat: marker.lat, lng: marker.lng }}
    />
    ))}
  </GoogleMap>

}