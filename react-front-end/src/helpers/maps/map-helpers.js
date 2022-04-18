import axios from 'axios';

export const onSubmit = (marker) => {
  const { lat, lng } = marker;
  const data = { lat, lng } 
  console.log("Marker: ", data)
  // axios.post('/api/guess', marker)
}