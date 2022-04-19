import { StreetViewPanorama, useJsApiLoader } from "@react-google-maps/api";
import { getDailyGame } from "../../helpers/maps/map-helpers";
import { useEffect, useState } from "react";

export default function StreetView() {

  const [coords, setCoords] = useState();

  useEffect(() => {
    getDailyGame()
      .then(res => {
        const { latitude, longitude } = res
        setCoords({
          lat: Number(latitude),
          lng: Number(longitude)
        })
      })
  }, []);

  // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    showRoadLabels: false,
  }
  
  
  return (
    <StreetViewPanorama 
      position={coords}
      visible={true}
      options={options}
    ></StreetViewPanorama>
  )

}