import { StreetViewPanorama } from "@react-google-maps/api";
import { Button } from "@mui/material";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StreetView(props) {

  // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
  const options = {
    disableDefaultUI: true,
    showRoadLabels: false,
    enableCloseButton:false
  }
  
  return (
    <>
      <StreetViewPanorama 
        position={props.coords}
        visible={true}
        options={options}
      >
      </StreetViewPanorama>
      <Button 
        variant="contained"
        sx={{ zIndex: 1, m: 1, mb: 3.5 }}
        onClick={props.resetLoc}
        endIcon={<FontAwesomeIcon icon={faStreetView} />}
      >Reset</Button>
    </>
  )

}