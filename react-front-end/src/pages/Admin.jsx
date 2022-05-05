import { Typography, Box, TextField, Button } from "@mui/material";
import axios from 'axios';

const Admin = () => {


  const handleSubmit = (e) => {
    e.preventDefault()
    const coords = {
      lat: e.target[0].value,
      lng: e.target[2].value
    }
    axios.post('api/games/daily', coords)
    .then(res => {
      alert(res.data)
      e.target[0].value = ''
      e.target[2].value = ''
    })
    .catch(err => {
      alert(err)
    })
  }


  return (
    <>
      <h1 className="page-title">Admin Page</h1>
      <Typography 
        variant="h5" 
        component="div"
        sx={{ marginBottom: '0.2em', textAlign: 'center' }}
      >
        Add Daily Game
      </Typography>

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
            type='number'
            required
            label="Latitude"
            inputProps={{
              style: {fontFamily: 'Roboto', fontSize: '1.5em'},
              step: "any",
              min: -90,
              max: 90
            }}
          />
          <TextField
            type='number'
            required
            label="Longitude"
            inputProps={{
              style: {fontFamily: 'Roboto', fontSize: '1.5em'},
              step: "any",
              min: -180,
              max: 180
            }}
          />
        </div>

        <div className='login-register-buttons'>
          <Button
            type='submit'
            variant='contained'
          >
            Submit
          </Button>
        </div>
      </Box>

    </>
  );
}

export default Admin;
