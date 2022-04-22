import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from './providers/AuthProvider';
import './App.scss';
import ButtonAppBar from "./components/Nav/NavBar";
// eslint-disable-next-line no-unused-vars
import { Theme, DarkTheme } from './theme/themeOptions';
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from '@mui/material';
import Index from './pages/Index';
import Account from './pages/Account';
import Leaderboards from './pages/Leaderboards';
import CreateCustomGame from './pages/Custom_game';
import PlayCustomGame from './pages/PlayCustomGame';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {

  const { auth } = useContext(authContext)
  
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline>
        <Router>
          <div className="App">

              <ButtonAppBar />   

              <div className='content'>

                <Switch>

                  <Route exact path="/">
                    { !auth ? <Redirect to='/login' /> : <Index/> }
                  </Route>

                  <Route exact path="/account">
                    { !auth ? <Redirect to='/login' /> : <Account/> }
                  </Route>
                
                  <Route exact path="/leaderboards">
                    { !auth ? <Redirect to='/login' /> : <Leaderboards /> }
                  </Route>
                
                  <Route exact path="/custom-game">
                    { !auth ? <Redirect to='/login' /> : <CreateCustomGame /> }
                  </Route>

                  <Route path="/custom-game/:id">
                    { !auth ? <Redirect to='/login' /> : <PlayCustomGame /> }
                  </Route>
                
                  <Route exact path="/login">
                    { auth ? <Redirect to='/' /> : <Login />}
                  </Route>
                
                  <Route exact path="/register">
                    <Register />
                    { auth ? <Redirect to='/' /> : <Register />}
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
