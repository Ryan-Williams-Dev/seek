import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { authContext } from '../providers/AuthProvider';
import AboutCard from '../components/Account/AboutCard';
import Stats from '../components/Account/Stats';
import FollowList from '../components/Account/FollowList';

const Account = () => {
  
  const { user } = useContext(authContext);
  const [userData, setUserData] = useState({})

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}users/${user.id}`)
      .then(res => {
        setUserData(...res.data);
      })
      .catch(err => { 
        console.log("Error:", err);
      });
  }, []);

  return (
    <>
      <div className='profile-header'>
        <div className='about-card'>
          <AboutCard userData={userData}/>
        </div>
      </div>
      <div className='info-row'>
        <Stats userData={userData}/>
        <FollowList userData={userData}/>
      </div>
    </>
  );
}

export default Account;
