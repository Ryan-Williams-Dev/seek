import { useState, useCallback, useEffect, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import mapStyles from "../../mapStyles";
import { Button } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

export default function Map(props) {
  
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  });
  
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState({lat: 50, lng: 50})
  const hasPlacedAnswer = useRef(false)


  // Assigns/reassigns user marker
  const onMapClick = useCallback((event) => {
    if (hasPlacedAnswer.current === true) return;
    setMarkers(() => [{
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date(),
      answer: false
    }]);
  }, []);

  // If an answer has been placed, assigns answer marker
  useEffect(() => {
    if(props.answer && !hasPlacedAnswer.current) {
      const answerMarker = {
        lat: props.answer.latitude,
        lng: props.answer.longitude,
        time: new Date(),
        answer: true
      }
      setMarkers([...markers, answerMarker]);
      hasPlacedAnswer.current = true;
    }
  }, [props.answer, markers]);

  const [mapref, setMapRef] = useState(null);
  const handleOnLoad = map => {
    setMapRef(map);
  };

  // Perists center of view over re-renders
  const handleCenterChanged = () => {
    if (mapref) {
      const newCenter = mapref.getCenter();
      const newCenterCoords = {
        lat: newCenter.lat(),
        lng: newCenter.lng()
      }
      setCenter({...newCenterCoords})
    }
  };

  

  if (!isLoaded) return <div>Loading...</div>;
  if (loadError) return `Error loading maps: ${loadError}`;

  // see https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
  }


  return <GoogleMap 
    zoom={2.5}
    center={center}
    mapContainerClassName="map-container"
    options={options}
    onClick={onMapClick}
    onLoad={handleOnLoad}
    onDragEnd={handleCenterChanged}
  >
    {markers.map((marker) => {
        if(marker.answer) {
          return(
            <Marker 
              key={marker.time.toISOString()}
              position={{ lat: marker.lat, lng: marker.lng }}
              animation={window.google.maps.Animation.DROP}
              title="Here!"
              icon={{
                url: '/icons/pin-svgrepo-com-answer.svg',
                scaledSize: new window.google.maps.Size(70, 70),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(35, 68),
              }}
            />
          )
        } else { 
          return(
            <Marker 
              key={marker.time.toISOString()}
              position={{ lat: marker.lat, lng: marker.lng }}
              animation={window.google.maps.Animation.DROP}
              title="Here!"
              icon={{
                url: '/icons/pin-svgrepo-com.svg',
                scaledSize: new window.google.maps.Size(50, 50),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(24.5, 49),
              }}
            />
          )
        }
      }
    )}

    {hasPlacedAnswer.current !== true && 
      <Button 
        variant="contained"
        endIcon={<FontAwesomeIcon icon={faMapPin} />}
        onClick={() => props.onSubmitGuess(markers[0]) }
        sx={{m: 1, mb: 3.5 }}
      >Submit</Button>
    }


  </GoogleMap>

}