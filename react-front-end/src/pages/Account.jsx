import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { authContext } from '../providers/AuthProvider';
import AboutCard from '../components/Account/AboutCard';
import Stats from '../components/Account/Stats';
import FollowList from '../components/Account/FollowList';

const Account = () => {
  
  const { user } = useContext(authContext);
  const [userData, setUserData] = useState({})
  // localhost:3000/api?param1=something&param2=other
  // base_URL/users?user_id=5
  // new route => base_URL/users/{user_id}

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_BASE_URL + `users/${user.email}`)
      .then(res => {
        console.log("Request successful:", res.data)
        setUserData(...res.data)
      })
      .catch(err => {
        console.log("Error:", err)
      });
  }, []);



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
