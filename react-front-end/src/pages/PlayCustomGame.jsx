import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import Scoreboard from "../components/Maps/Scoreboard";
import Map from "../components/Maps/Map";
import StreetView from "../components/Maps/StreetView";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { getCustomGame } from "../helpers/maps/map-helpers";
import { onSubmitGuess } from "../helpers/maps/map-helpers";

const PlayCustomGame = (props) => {
  const { user } = useContext(authContext);
  const { gameID } = useParams();
  const { result, setResult } = props;
  
  const [coords, setCoords] = useState();
  // const [gameID, setGameID] = useState();

  // refactor async function outside of useEffect, then call it within useEffect

  useEffect(() => {
    getCustomGame(gameID)
      .then(res => {
        setCoords({lat: res.latitude, lng: res.longitude})
      })
      .catch(err => {
        console.log(err)
      });
  }, []);

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

      <Map onSubmitGuess={onSubmitGuess} result={result} setResult={setResult}/>
    </>
  );
}

export default PlayCustomGame;
