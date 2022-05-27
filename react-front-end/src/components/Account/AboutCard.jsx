import { Card, CardActions, CardContent, CardMedia, Typography, Button, Fab, Box, TextField, Snackbar } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import './about-card-styles.scss';
import { useContext, useState, useEffect } from 'react';
import { authContext } from '../../providers/AuthProvider';
import axios from 'axios';
import { useFilePicker } from 'use-file-picker';

const AboutCard = () => {

  const { user } = useContext(authContext);
  const [ editMode, setEditMode ] = useState(false);
  const [ snackbar, setSnackBar ] = useState({
    open: false,
    message: '',
    severity: ''
  })

  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: 'DataURL',
    accept: 'image/*',
    multiple: true,
    limitFilesConfig: { max: 1 },
    // minFileSize: 0.1, // in megabytes
    maxFileSize: 1,
    imageSizeRestrictions: {
      maxHeight: 900, // in pixels
      maxWidth: 1600,
      minHeight: 200,
      minWidth: 200,
    },
  });

  useEffect(() => {
    if (filesContent.length === 1) {
      
    }
  }, [filesContent]);

  async function saveDetails(e) {
    e.preventDefault()
    const params = {
      userId: user.id,
      newUsername: e.target[0].value || null,
    } 

    try {
      const res = await axios.put('/users', params)
      console.log("res: ", res)
      const { message, error } = res.data
      
      setSnackBar({
        open: true,
        message: message,
        severity: error ? 'warning' : 'success'
      })
      
      if (!error) {
        setEditMode(false);
      }

    } catch (error) {
      console.log(error)
      setSnackBar({
        open: true,
        severity: 'error',
        message: 'Oops, something went wrong.'
      })
    }
  }

  return (
    <Card className='profile-card-contents' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={user.avatar_url}
        alt="profile-photo"
      />

      {!editMode &&
        <>
          <CardContent>
        
            <Typography gutterBottom variant="h4">
              {user.first_name} {user.last_name}
            </Typography>
            <ul className='about-list'>
              <dt><strong>Username:</strong></dt>
              <dd>{user.username}</dd>
              <dt><strong>Location:</strong></dt>
              <dd>Vancouver, BC, Canada</dd>
            </ul>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => setEditMode(true)} >Edit Details</Button>
            <Button size="small">Share</Button>
          </CardActions>
        </>
      }
      {editMode &&
        <>
          <CardContent>
          {filesContent.map((file, index) => (
            <div key={index}>
              <h2>{file.name}</h2>
              <img alt={file.name} src={file.content}></img>
              <br />
            </div>
          ))}
          {errors.length && errors.map(err => {
             return (<div>{JSON.stringify(err)}</div>) 
          })}
          {loading && <div>Loading...</div>}
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch', height: '100%' },
              }}
              autoComplete="off"
              onSubmit={(event) => saveDetails(event)}
            >
              <div 
                className='form-container'
              >

                <Fab onClick={openFileSelector} color="secondary" size="small" aria-label="edit">
                  <AddPhotoAlternate color='primary' />
                </Fab>

                <TextField
                  placeholder={user.username}
                  type='text'
                  label="username"
                  inputProps={{
                    style: {fontFamily: 'Roboto', fontSize: '1.5em'},
                    minLength: 4,
                    maxLength: 20,
                    pattern: "[A-Za-z0-9]+",
                    title: "Letters and numbers only, No special characters or white space"   
                  }}
                />
                {/* <TextField
                  type='text'
                  label="location"
                  inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'}}}
                /> */}
                <CardActions>
                  <Button type='submit' size="small" >Save</Button>
                  <Button size="small" onClick={() => setEditMode(false)} >Back</Button>
                </CardActions>
              </div>
            </Box>
          </CardContent>
        </>
      }

    <Snackbar 
      open={snackbar.open}
      autoHideDuration={6000}
      onClose={() => setSnackBar({
        open: false,
        message: '',
        severity: ''
      })}
      message={snackbar.message}
      severity={snackbar.severity}
    />
    </Card>
  );
}

export default AboutCard;