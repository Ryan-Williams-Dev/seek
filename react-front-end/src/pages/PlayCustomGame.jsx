import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Map from "../components/Maps/Map";
import StreetView from "../components/Maps/StreetView";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { getCustomGame, onSubmitGuess } from "../helpers/maps/map-helpers";

const PlayCustomGame = () => {
  // const { user } = useContext(authContext);
  const { gameID } = useParams();
  
  const [result, setResult] = useState(false);
  const [coords, setCoords] = useState();

  useEffect(() => {
    getCustomGame(gameID)
      .then(res => {
        setCoords({lat: res.latitude, lng: res.longitude})
      })
      .catch(err => {
        console.log(err)
      });
  }, [gameID]);

  const resetLoc = () => {
    setCoords({...coords})
  };
  
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  });
  
  if (!isLoaded) return <div>Loading...</div>
  if (loadError) return `Error loading maps: ${loadError}`;

  return (
    <>
      <GoogleMap
        id="street-view-wrapper"
        mapContainerClassName="map-container"
        >
          <StreetView
            coords={coords}
            resetLoc={resetLoc}
          />
        </GoogleMap>

      <Map 
        onSubmitGuess={onSubmitGuess} result={result} setResult={setResult} gameId={gameID}
       />
    </>
  );
}

export default PlayCustomGame;
