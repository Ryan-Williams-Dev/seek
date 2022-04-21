import './popup-styles.scss'
import { Button } from '@mui/material';
import { refreshPage } from '../../helpers/maps/map-helpers';

const CreateGamePopup = (props) => {

  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <h2>Game Saved!</h2>
        <div className='btn-row'>
          <Button className="popup-btn">Challenge A Friend</Button>
          <Button className="popup-btn" href="/account">My Account</Button>
          <Button className="popup-btn" onClick={refreshPage}>Create Another Game</Button>
        </div>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default CreateGamePopup;
