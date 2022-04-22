import { Box, Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom';

export default function Register() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[2].value);
    console.log(event.target[4].value);
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
            inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'}}}
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
            inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'}}}
          />
          <TextField
            type='password'
            required
            label="confirm password"
            inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'}}}
          />
          <TextField
            label="first name"
            inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'}}}
          />
          <TextField
            label="last name"
            inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'}}}
          />
          <TextField
            label="description"
            inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'}}}
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