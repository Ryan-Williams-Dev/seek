import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from "@react-google-maps/api";
import { StreetViewPanorama } from "@react-google-maps/api";

export default function StreetView() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  })

  if (!isLoaded) return <div>Loading...</div>

  return <StreetViewPanorama 
    position={{lat: 48.373229, lng:-123.586959}}
    visible={true}
  ></StreetViewPanorama>

}
