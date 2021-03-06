import StreetView from '../components/Maps/StreetView';
import Map from '../components/Maps/Map';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useState, useEffect, useContext } from 'react';
import { authContext } from '../providers/AuthProvider'
import Scoreboard from '../components/Maps/Scoreboard';
import { getDailyGame, onSubmitGuess } from '../helpers/maps/map-helpers';

const Index = () => {
  const { user } = useContext(authContext)

  // Street View State and logic
  const [result, setResult] = useState(false)
  const [coords, setCoords] = useState()
  const [gameId, setGameId] = useState()

  useEffect(() => {
    document.title = 'Daily Game | Seek'
  }, []);

  useEffect(() => {
    const id = user ? user.id : null
    getDailyGame(id)
      .then(res => {
        if(res.message) {
          alert(res.message)
        }
        setGameId(res.gameId)
        if (res.guess) {
          setResult({
            distance: res.distance,
            answer: res.answerCoords,
            score: res.guess.score,
            guess: res.guess
          })
        }
        
        if (res.answerCoords) {
          const { latitude, longitude } = res.answerCoords
          setCoords({
            lat: Number(latitude),
            lng: Number(longitude),
          })
        }
      })
  }, [user]);

  const resetLoc = () => {
    setCoords({...coords})
  } 

  // Other Logic
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  })

  if (!isLoaded) return <div>Loading...</div>
  if (loadError) return `Error loading maps: ${loadError}`;

  return (
    <>
      {result && <Scoreboard 
        distance={result.distance}
        score={result.score}
      />}

      { !result && <GoogleMap
        id="street-view-wrapper"
        mapContainerClassName="map-container"
        >
          <StreetView
            coords={coords}
            resetLoc={resetLoc}
          />
        </GoogleMap>}

      <Map onSubmitGuess={onSubmitGuess} result={result} setResult={setResult} gameId={gameId}/>
    </>
  );
};

export default Index;


