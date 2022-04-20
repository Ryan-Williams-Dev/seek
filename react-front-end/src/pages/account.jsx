import AboutCard from '../components/Account/AboutCard';
import Stats from '../components/Account/Stats'

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
      </div>
    </>
  );
}

export default Account;
