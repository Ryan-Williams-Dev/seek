import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import mapStyles from "../../mapStyles";

export default function Map() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  })

  if (!isLoaded) return <div>Loading...</div>
  if (loadError) return `Error loading maps: ${loadError}`;

  const options = {
    styles: mapStyles
  }

  return <GoogleMap 
  zoom={2.5}
  center={{lat: 50, lng: 50}}
  mapContainerClassName="map-container"
  options={options}
  ></GoogleMap>

}