import './popup-styles.scss'
import { useState } from 'react';
import { Button, Snackbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'
import { refreshPage, challengeLinkToClipboard } from '../../helpers/maps/map-helpers';

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
  );
  
  // Function executes two functions simultaneously onClick
  const getChallengeLink = (gameId) => {
    challengeLinkToClipboard(gameId)
    setSnackbarOpen(true)
  };

  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <h2>Game Saved!</h2>
        <div className='btn-row'>
          <Button className="popup-btn" onClick={() => getChallengeLink(props.trigger)}>Challenge A Friend</Button>
          <Button className="popup-btn" href="/account">My Account</Button>
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