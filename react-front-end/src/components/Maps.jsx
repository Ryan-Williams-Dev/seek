import { useState, useMemo } from 'react';
import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from "@react-google-maps/api";

export default function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY 
  })
  const [map, setMap] = useState(null)
  
  if (!isLoaded) return <div>Loading...</div>
  
  return <GoogleMap 
  zoom={10} 
  center={{lat: 44, lng: -80}}
  mapContainerClassName="map-container"
  ></GoogleMap>

}
