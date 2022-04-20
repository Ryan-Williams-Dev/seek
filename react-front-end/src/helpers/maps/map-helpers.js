import axios from 'axios';

export const onSubmitGuess = (marker) => {
  axios.post('api/guess', marker)
    .then(res => {
      console.log("success: ", res.data)
      alert(`Score: ${res.data.score} --- You were ${res.data.distance}km from the location`)
    })
    .catch(err => {
      console.log("unsuccessful: ", err)
      alert("Error, please try again " + err)
    })
}

export const getDailyGame = () => {
  return axios.get('api/games')
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
      return err
    })
}