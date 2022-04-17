import { StreetViewPanorama, useJsApiLoader } from "@react-google-maps/api";

export default function StreetView() {

  // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    showRoadLabels: false,
    pov: {heading: 100, pitch: -10}
  }
  
  return <StreetViewPanorama 
    position={{lat: 48.373229, lng:-123.586959}}
    visible={true}
    options={options}
  ></StreetViewPanorama>

}
