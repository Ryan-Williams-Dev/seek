import axios from 'axios';

export const onSubmitGuess = (marker) => {
  axios.post('/api/guess', marker)
    .then(res => {
      console.log("success: ", res)
    })
    .catch(err => {
      console.log("unsuccessful: ", err)
    })
}