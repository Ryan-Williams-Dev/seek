import { useState, useCallback, useEffect, useRef, useContext } from 'react';
import { authContext } from '../../providers/AuthProvider'
import { GoogleMap, useJsApiLoader, Marker, Polyline } from "@react-google-maps/api";
import { v4 as uuidv4 } from 'uuid';
import mapStyles from "../../mapStyles";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { setAnswerMarker, setPolyFromMarkers, setView } from '../../helpers/maps/map-helpers';

export default function Map(props) {
  const { user } = useContext(authContext)

  // State initialisations
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState({lat: 50, lng: 50});
  const [polyline, setPolyline] = useState([]);
  const hasPlacedAnswer = useRef(false);
  const mapRef = useRef(null);

  // Handles initial load in logic
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  });
  
  const handleOnLoad = map => {
    mapRef.current = map;
  };
 
  // Perists center of view over re-renders
  const handleCenterChanged = () => {
    if (mapRef) {
      const newCenter = mapRef.current.getCenter();
      const newCenterCoords = {
        lat: newCenter.lat(),
        lng: newCenter.lng()
      }
      setCenter({...newCenterCoords})
    }
  };

  // Assigns/reassigns user marker
  const onMapClick = useCallback((event) => {
    if (hasPlacedAnswer.current === true) return;
    setMarkers(() => [{
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      answer: false
    }]);
  }, []);
  
  // This use effect fires upon answer submission & when user has already played
  useEffect(() => {
    if(props.result && !hasPlacedAnswer.current && isLoaded) {
      if (props.result.guess) {
        setMarkers(() => [{
          lat: props.result.guess.latitude,
          lng: props.result.guess.longitude,
          answer:false
        }])
      }
      setAnswerMarker(props.result.answer, setMarkers);
      setView(props.result.answer, setCenter, mapRef)
      hasPlacedAnswer.current = true;
    }
  }, [props.result, markers, isLoaded]);

  useEffect(() => {
    if(markers.length > 1) {
       setPolyFromMarkers(markers, setPolyline)
    }
  }, [markers])
  
  // see https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
  }

  const lineSymbol = {
    path: "M 0,-1 0,1",
    strokeOpacity: 1,
    scale: 5,
    strokeColor: "#ad0b0b",
    anchor: new window.google.maps.Point(0, -0.5),
  };
  
  const lineOptions = {
    geodesic: true,
    strokeOpacity: 0,
    fillOpacity: 0,
    zIndex: 1,
    icons: [
      {
        icon: lineSymbol,
        offset: "1",
        repeat: "20px",
      }
    ],
  };
  
  if (!isLoaded) return <div>Loading...</div>;
  if (loadError) return `Error loading maps: ${loadError}`;
  
  return <GoogleMap 
    zoom={2.5}
    center={center}
    mapContainerClassName="map-container"
    options={options}
    onClick={onMapClick}
    onLoad={handleOnLoad}
    onDragEnd={handleCenterChanged}
  >
    {markers.map((marker, index) => {
        if(marker.answer) {
          return(
              <Marker 
                key={index}
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
              key={index}
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

    {hasPlacedAnswer.current === true &&
      <Polyline
        key={uuidv4()}
        path={polyline}
        options={lineOptions}
        
      />
    }

    {hasPlacedAnswer.current !== true && 
      <Button 
        variant="contained"
        endIcon={<FontAwesomeIcon icon={faMapPin} />}
        onClick={() => props.onSubmitGuess(markers[0], props.gameId, user, props.setResult) }
        sx={{m: 1, mb: 3.5 }}
      >Submit</Button>
    }


  </GoogleMap>

}