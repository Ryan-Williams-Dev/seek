// import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import ButtonAppBar from "./components/Nav/NavBar";
// eslint-disable-next-line no-unused-vars
import { Theme, DarkTheme } from './theme/themeOptions';
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from '@mui/material';
import Index from './pages';
import Account from './pages/account';
import Leaderboards from './pages/leaderboards';
import CreateCustomGame from './pages/custom_game';


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
        <Router>
          <div className="App">

            <ButtonAppBar />   

            <div className='content'>

              <Switch>

                <Route exact path="/">
                  <Index/>
                </Route>

                <Route exact path="/account">
                  <Account/>
                </Route>
              
                <Route exact path="/leaderboards">
                  <Leaderboards />
                </Route>
              
                <Route exact path="/custom-game">
                  <CreateCustomGame />
                </Route>
              
              </Switch>

            </div>

          </div>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
