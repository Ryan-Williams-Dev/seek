// import axios from 'axios';
import './App.scss';
import ButtonAppBar from "./components/Nav/NavBar";
import StreetView from './components/Maps/StreetView';
import Map from './components/Maps/Map';
import ButtonAppBar from "./components/Nav/NavBar"
import { Theme, DarkTheme } from './theme/themeOptions';
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from '@mui/material';

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


  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline>
        <div className="App">
          <ButtonAppBar />   
          <button onClick={this.fetchData} >
            Fetch Data
          </button>
          <StreetView />
          <Map />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
