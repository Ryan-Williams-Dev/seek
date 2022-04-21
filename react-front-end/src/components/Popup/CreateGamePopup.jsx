import './popup-styles.scss'

const CreateGamePopup = (props) => {
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <h3>Game Saved!</h3>
        <button className="popup-btn">Challenge A Friend!</button>
        <button className="popup-btn">My Games</button>
        <button className="popup-btn">Create Another Game</button>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default CreateGamePopup;
