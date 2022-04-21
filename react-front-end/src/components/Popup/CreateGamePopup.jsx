
const CreateGamePopup = (props) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="popup-btn">Challenge A Friend!</button>
        <button className="popup-btn">My Games</button>
        <button className="popup-btn">Create Another Game</button>
        { props.children }
      </div>
      
    </div>
  );
}

export default CreateGamePopup;
