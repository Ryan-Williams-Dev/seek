import './popup-styles.scss'
import { Button } from '@mui/material';

const CreateGamePopup = (props) => {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <h3>Game Saved!</h3>
        <div className='btn-row'>
        <Button className="popup-btn">Challenge A Friend!</Button>
        <Button className="popup-btn">My Games</Button>
        <Button className="popup-btn">Create Another Game</Button>
        </div>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default CreateGamePopup;
