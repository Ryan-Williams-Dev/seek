/* eslint-disable no-useless-escape */
import { Box, Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useRef, useContext } from 'react';
import { authContext } from '../providers/AuthProvider';

export default function Register() {
  const usernameRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const passwordConfirmationRef = useRef('')
  const firstNameRef = useRef('')
  const lastNameRef = useRef('')
  const descriptionRef = useRef('')
  const { register } = useContext(authContext)

  useEffect(() => {
    document.title = 'Register | Seek'
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      description: descriptionRef.current.value
    };

    return register(userData);
  }

  return (
    <>
      <h1 className="page-title">Register</h1>
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
            required
            label="username"
            inputRef={usernameRef}
            inputProps={{
              style: {fontFamily: 'Roboto', fontSize: '1.5em'}, 
              minLength: 4,
              maxLength: 20,
              pattern: "[A-Za-z0-9]+",
              title: "Letters and numbers only, No special characters or white space"
            }}
          />
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
            inputProps={{
              style: {fontFamily: 'Roboto', fontSize: '1.5em'},
              pattern: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
              title: "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            }}
          />
          <TextField
            type='password'
            required
            label="confirm password"
            inputRef={passwordConfirmationRef}
            inputProps={{
              style: {fontFamily: 'Roboto', fontSize: '1.5em'},
              pattern: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
              title: "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            }}
          />
          <TextField
            label="first name"
            inputRef={firstNameRef}
            inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'},
              maxLength: 20,
            }}
          />
          <TextField
            label="last name"
            inputRef={lastNameRef}
            inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'},
              maxLength: 20
            }}
          />
          <TextField
            label="description"
            inputRef={descriptionRef}
            inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'},
            maxLength: 255,
            }}
          />
          <div className='login-register-buttons'>
            <Button
              type='submit'
              variant='contained'
            >
              Submit
            </Button>
            <Link to="/login" className="login-button" >
              <Button className="login-button" variant='contained' >Login</Button>
            </Link>   
          </div>

        </div>

      </Box>
    </>

  )
}