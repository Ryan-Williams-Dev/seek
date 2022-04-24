import './popup-styles.scss'
import { useState } from 'react';
import { Button, Snackbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'
import { refreshPage, challengeLinkToClipboard } from '../../helpers/maps/map-helpers';
import { Link } from 'react-router-dom';

const CreateGamePopup = (props) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  // Handles close action for Snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  // Snackbar "X" icon
  const snackbarAction = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => handleClose()}
      >
          <CloseIcon fontSize="small"/>
      </IconButton>
    </>
  )
  
  // Function executes two functions simultaneously onClick
  const getChallengeLink = () => {
    challengeLinkToClipboard()
    setSnackbarOpen(true)
  };

  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <h2>Game Saved!</h2>
        <div className='btn-row'>
          <Button className="popup-btn" onClick={() => getChallengeLink()}>Challenge A Friend</Button>
          <Link to="/account">
            <Button className="popup-btn">My Account</Button>
          </Link>
          <Button className="popup-btn" onClick={refreshPage}>Create Another Game</Button>
          <Snackbar 
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={() => handleClose()}
            message="Challenge link copied to clipboard!"
            action={snackbarAction}
          />
        </div>
        { props.children }
      </div>
    </div>
  ) : "";
};

export default CreateGamePopup;