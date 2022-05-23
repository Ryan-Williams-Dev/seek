import { Card, CardActions, CardContent, CardMedia, Typography, Button, Fab, Box, TextField} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './about-card-styles.scss';
import { useContext, useState } from 'react';
import { authContext } from '../../providers/AuthProvider';

const AboutCard = () => {

  const { user } = useContext(authContext);
  const [ editMode, setEditMode ] = useState(false);

  const saveDetails = (e) => {
    e.preventDefault()
    const params = {
      username: e.target[0].value || null,
    } 
    console.log(params)
    setEditMode(false);
  }

  return (
    <Card className='profile-card-contents' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={user.avatar_url}
        alt="profile-photo"
      />
        <Fab onClick={() => setEditMode(prev => !prev)} color="secondary" size="small" aria-label="edit">
          <EditIcon />
        </Fab>

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
              <TextField
                placeholder={user.username}
                type='text'
                label="username"
                inputProps={{style: {fontFamily: 'Roboto', fontSize: '1.5em'}}}
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




    </Card>
  );
}

export default AboutCard;