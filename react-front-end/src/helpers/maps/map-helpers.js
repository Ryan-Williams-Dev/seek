import axios from 'axios';

// export const onSubmitGuess = (marker) => {
//   axios.post('api/guess', marker)
//     .then(res => {
//       console.log("success: ", res.data)
//       alert(`Score: ${res.data.score} --- You were ${res.data.distance}km from the location`)
//     })
//     .catch(err => {
//       console.log("unsuccessful: ", err)
//       alert("Error, please try again " + err)
//     })
// }

export const refreshPage = () => {
  window.location.reload(false);
};

export const challengeLinkToClipboard = () => {
  
  const message = `🌎  I created a new challenge on SEEK!\n\n 📍 🕵️‍♀️ Follow this link to see how close you can get:\n\n ➡️ {challengeURL} ⬅️`

  navigator.clipboard.writeText(message);
}

export const getDailyGame = (userId) => {
  return axios.get('api/games', {params: {userId}})
    .then(res => {
      console.log('data: ', res.data)
      return res.data;
    })
    .catch(err => {
      console.log("Error:",err);
      return err;
    })
};

export const setGameLocation = (marker) => {
  
  console.log("Making axios request:", marker)
  axios.post('api/games', marker)
    .then(res => {
      console.log("Axios request made successfully:");
      return res.data;
    })
    .catch(err => {
      console.log("Error:", err);
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
  console.log("from maphelpers,  mapref: ", mapRef.current)
  if (mapRef.current) {
    mapRef.current.setZoom(3.7)
  }
};