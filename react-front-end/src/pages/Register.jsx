/* eslint-disable no-useless-escape */
import { Box, Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Register() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target;
    const newUser = {
      username: input[0].value,
      email: input[2].value,
      password: input[4].value,
      passwordConfirmation: input[6].value,
      firstName: input[8].value || '',
      lastName: input[10].value || '',
      description: input[12].value || ''
    };

    if (newUser.password !== newUser.passwordConfirmation) {
      alert("Password and password confirmation did not match.")
    }

    axios.post('users/new', newUser)
    
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
            inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'}}}
          />
          <TextField
            type='password'
            required
            label="password"
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
            inputProps={{
              style: {fontFamily: 'Roboto', fontSize: '1.5em'},
              pattern: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
              title: "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            }}
          />
          <TextField
            label="first name"
            inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'},
              maxLength: 20,
            }}
          />
          <TextField
            label="last name"
            inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'},
              maxLength: 20
            }}
          />
          <TextField
            label="description"
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