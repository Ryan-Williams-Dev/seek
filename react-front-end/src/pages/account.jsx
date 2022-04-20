import AboutCard from '../components/Account/AboutCard';
import Stats from '../components/Account/Stats'
import FollowList from '../components/Account/FollowList'

const Account = () => {
  
  
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
