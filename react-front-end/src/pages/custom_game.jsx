import CustomGameMap from "../components/Maps/CustomGameMap";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const CreateCustomGame = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  })

  if (!isLoaded) return <div>Loading...</div>
  if (loadError) return `Error loading maps: ${loadError}`;

  
  return (
      <CustomGameMap />
  );
}

export default CreateCustomGame;