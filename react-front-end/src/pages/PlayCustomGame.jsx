import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import Scoreboard from "../components/Maps/Scoreboard";
import Map from "../components/Maps/Map";
import StreetView from "../components/Maps/StreetView";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { getCustomGame } from "../helpers/maps/map-helpers";

const PlayCustomGame = () => {
  const { user } = useContext(authContext);
  
  const [result, setResult] = useState(false);
  const [coords, setCoords] = useState();
  const [gameId, setGameId] = useState();

  useEffect(() => {
    getCustomGame(gameId)
      .then(res => {
        setGameId(res.gameId)
        if (res.guess) {
          setResult({
            distance: res.distance,
            answer: res.answerCoords,
            score: res.guess.score,
            guess: res.guess
          });
        }
      })
  }, []);
  
  
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  })
  

  if (!isLoaded) return <div>Loading...</div>
  if (loadError) return `Error loading maps: ${loadError}`;

  

  return (
    <>
      <GoogleMap
        id="street-view-wrapper"
        mapContainerClassName="map-container"
        >
          <StreetView
            coords={{lat: 43.642538, lng: -79.427151}}
            resetLoc={""}
          />
        </GoogleMap>

      <Map onSubmitGuess={""} result={""} />
    </>
  );
}

export default PlayCustomGame;
