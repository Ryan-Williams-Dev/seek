import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { authContext } from '../providers/AuthProvider';
import AboutCard from '../components/Account/AboutCard';
import Stats from '../components/Account/Stats';
import FollowList from '../components/Account/FollowList';
import { CircularProgress, Box } from '@mui/material';

const Account = () => {
  
  const { user } = useContext(authContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    document.title = 'Account | Seek'
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}users/${user.id}`)
      .then(res => {
        setUserData({
          follows: res.data.follows,
          totals: res.data.totals[0]
        });
      })
      .catch(err => { 
        console.log("Error:", err);
      });
  }, [user.id]);

  return (
    <div className='account-cards-div'>
      <div className='profile-header'>
        <div className='about-card'>
          <AboutCard />
        </div>
      </div>

      {userData && 
        <>
          <Stats totals={userData.totals}/>
          <FollowList follows={userData.follows} />
        </>
      }

      {!userData && <Box 
        sx={{ 
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        color='primary'
      >
        <CircularProgress size={100}/>
      </Box>}
      
    </div>
    
  );
}

export default Account;
