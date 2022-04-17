// import axios from 'axios';
import './App.scss';
import ButtonAppBar from "./components/Nav/NavBar";
import StreetView from './components/Maps/StreetView';
import Map from './components/Maps/Map';
import { Theme, DarkTheme } from './theme/themeOptions';
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from '@mui/material';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


function App() {

  // fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
  //       message: response.data.message
  //     });
  //   }) 
  // }

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY 
  })

  if (!isLoaded) return <div>Loading...</div>
  if (loadError) return `Error loading maps: ${loadError}`;

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline>
        <div className="App">
          <ButtonAppBar />   
          <GoogleMap
          id="example"
          mapContainerClassName="map-container"
          zoom={7}
          center={{lat: 48.373229, lng: -123.586959}}
          >
            <StreetView />
          </GoogleMap>
          <Map />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
