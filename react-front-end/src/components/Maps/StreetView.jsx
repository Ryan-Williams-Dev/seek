import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from "@react-google-maps/api";


export default function StreetView() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  })

  if (!isLoaded) return <div>Loading...</div>

  return <GoogleMap 
  zoom={10}
  streetView="false"
  center={{lat: 48.373223, lng: -123.586957}}
  mapContainerClassName="map-container"
  ></GoogleMap>

}
