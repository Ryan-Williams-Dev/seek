import { Box, Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom';
import "./page-styles.scss";
import { useContext, useEffect, useRef } from 'react';
import { authContext } from '../providers/AuthProvider';

export default function Login() {
  
  const { login } = useContext(authContext)

  const emailRef = useRef('')
  const passwordRef = useRef('')

  useEffect(() => {
    document.title = 'Login | Seek'
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(emailRef.current.value, passwordRef.current.value)
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
            inputRef={emailRef}
            inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'}}}
          />
          <TextField
            type='password'
            required
            label="password"
            inputRef={passwordRef}
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
