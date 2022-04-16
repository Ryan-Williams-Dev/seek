import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyles from "../../mapStyles";

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  })

  if (!isLoaded) return <div>Loading...</div>

  const options = {
    styles: mapStyles
  }

  return <GoogleMap 
  zoom={2.5}
  center={{lat: 50, lng: 50}}
  mapContainerClassName="map-container"
  ></GoogleMap>

}