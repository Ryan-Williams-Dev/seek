import { StreetViewPanorama } from "@react-google-maps/api";
import { getDailyGame } from "../../helpers/maps/map-helpers";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StreetView() {

  const [coords, setCoords] = useState()

  useEffect(() => {
    getDailyGame()
      .then(res => {
        const { latitude, longitude } = res
        setCoords({
          lat: Number(latitude),
          lng: Number(longitude),
        })
      })
  }, []);


  const resetLoc = () => {
    setCoords({...coords})
  } 

  // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
  const options = {
    disableDefaultUI: true,
    showRoadLabels: false,
    enableCloseButton:false
  }
  
  return (
    <>
      <StreetViewPanorama 
        position={coords}
        visible={true}
        options={options}
      >
      </StreetViewPanorama>
      <Button 
        variant="contained"
        sx={{ zIndex: 1, m: 1, mb: 3.5 }}
        onClick={resetLoc}
        startIcon={<FontAwesomeIcon
          icon={faStreetView}
/>}
      >Reset</Button>
    </>
  )

}