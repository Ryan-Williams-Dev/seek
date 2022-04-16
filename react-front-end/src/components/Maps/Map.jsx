import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  })

  if (!isLoaded) return <div>Loading...</div>

  return <GoogleMap 
  zoom={2} 
  mapContainerClassName="map-container"
  ></GoogleMap>

}