import { Box, Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./page-styles.scss";
import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';

export default function Login() {
  
  const { login } = useContext(authContext)

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = {}
    params.email = event.target[0].value
    params.password = event.target[2].value

    axios.post(process.env.REACT_APP_API_BASE_URL + 'users', params)
      .then((res) => {
        if (!res.data.valid) {
          return alert("Incorrect credentials")
        } 
        
        login(res.data.user)
      })
      .catch((err) => {
        console.log('Front end: ', err)
      })
  }

  return (
    <>
      <h1 className="page-title">Login</h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch', height: '100%' },
        }}
        autoComplete="off"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div 
          className='form-container'
        >
          <TextField
            type='email'
            required
            label="email"
            inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'}}}
          />
          <TextField
            type='password'
            required
            label="password"
            inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'}}}
          />
          <div className='login-register-buttons'>
            <Button
              type='submit'
              variant='contained'
            >
              Login
            </Button>

            <Link to='/register' className='register-button'>
              <Button
                variant='contained'
              >
                Register
              </Button>
            </Link>

          </div>
        </div>

      </Box>
    </>

  )
}
