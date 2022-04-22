import axios from 'axios';
import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import AboutCard from '../components/Account/AboutCard';
import Stats from '../components/Account/Stats';
import FollowList from '../components/Account/FollowList';

const Account = () => {
  
  const { user } = useContext(authContext);
  axios.get(process.env.REACT_APP_API_BASE_URL + 'users', user)
    .then(res => {
      console.log("Request successful:", res.data)
    })
    .catch(err => {
      console.log("Error:", err)
    });



  return (
    <>
      <div className='profile-header'>
        <div className='about-card'>
          <AboutCard />
        </div>
      </div>
      <div className='info-row'>
        <Stats />
        <FollowList />
      </div>
    </>
  );
}

export default Account;
