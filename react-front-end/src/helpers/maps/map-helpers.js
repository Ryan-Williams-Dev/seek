import axios from 'axios';

export const onSubmitGuess = (marker, gameId, user, setResult) => {
  axios.post('api/guess', {...marker, gameId, user})
    .then(res => {
      console.log("success:", res.data);
      setResult(res.data);
    })
    .catch(err => {
      alert("Error, please try again " + err);
    })
};

export const refreshPage = () => {
  window.location.reload(false);
};

export const challengeLinkToClipboard = (gameId) => {
  
  const message = `🌎  I created a new challenge on SEEK!\n\n 📍 🕵️‍♀️ Follow this link to see how close you can get:\n\n ➡️ ${process.env.REACT_APP_FRONT_END_BASE_URL}custom-game/${gameId} ⬅️`

  navigator.clipboard.writeText(message);
};

export const getDailyGame = (userId) => {
  return axios.get('api/games', {params: {userId}})
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log("Error:", err);
      return err;
    })
};

export const setGameLocation = (marker) => {
  
  return axios.post('api/games', marker)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      alert("Error: " + err);
    })
};

export const setAnswerMarker = (answer, setMarkers) => {
  const answerMarker = {
    lat: answer.latitude,
    lng: answer.longitude,
    time: new Date(),
    answer: true
  }
  setMarkers((prev) => [...prev, answerMarker]);
};

export const setView = (answer, setCenter, mapRef) => {
  const newCenterCoords = {
    lat: answer.latitude,
    lng: answer.longitude
  }
  setCenter({...newCenterCoords})
  if (mapRef.current) {
    mapRef.current.setZoom(3.7)
  }
};

export const getCustomGame = (gameID) => {
  return axios.get(`/api/games/${gameID}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log("Error:",err);
      return err;
    })
};