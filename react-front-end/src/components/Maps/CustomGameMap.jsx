import { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import mapStyles from '../../mapStyles';
import { Button } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { setGameLocation } from '../../helpers/maps/map-helpers';

const CustomGameMap = (props) => {
  
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  })

  const [center] = useState({lat: 50, lng: 50});
  const [marker, setMarker] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const onMapClick = useCallback((event) => {
    if(!hasSubmitted) {
      console.log(hasSubmitted)
      setMarker(() => [{
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      }]);
    }
  }, [hasSubmitted]);

  const onSubmitClick = () => {
    setHasSubmitted(true)
    setGameLocation(marker[0])
    .then(res => {
      props.triggerPopup(res.id);
    });
  };

  if (!isLoaded) return <div>Loading...</div>
  if (loadError) return `Error loading maps: ${loadError}`;

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    streetViewControl:true
  };

  return (
    <GoogleMap 
      zoom={3}
      center={center}
      mapContainerClassName="map-container-full"
      options={options}
      onClick={onMapClick}
    >
      {marker.map((m) => {
        return <Marker 
          key={m.time.toISOString()}
          position={{ lat: m.lat, lng: m.lng }}
          animation={window.google.maps.Animation.DROP}
          title="Here!"
          icon={{
            url: '/icons/pin-svgrepo-com.svg',
            scaledSize: new window.google.maps.Size(50, 50),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(24.5, 49)
          }}
        />
      })}
      
      { !hasSubmitted && <Button 
        variant="contained"
        onClick={() => onSubmitClick()}
        startIcon={<FontAwesomeIcon icon={faMapPin} />}
        sx={{m: 1, mb: 3.5 }}
        >Set Location
      </Button>}

    </GoogleMap>
  );
};

export default CustomGameMap;
