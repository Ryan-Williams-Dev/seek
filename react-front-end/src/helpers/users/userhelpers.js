import axios from "axios"

export const fetchUserData = (userId) => {
  return axios.get('/api/fetch/', { params: {id: userId} })
  .then(data => {
    // console.log(data)
    return data;
  })
  .catch(err => {
    console.log(err);
  });
}