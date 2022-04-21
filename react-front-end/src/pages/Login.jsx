import { Box, Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom';
import "./page-styles.scss";

export default function Login() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {}
    params.email = event.target[0].value
    params.password = event.target[2].value
    console.log(params)
  }

  return (
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

  )
}
