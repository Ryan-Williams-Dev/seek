import { Card, CardActions, CardContent, CardMedia, Typography, Button, Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './about-card-styles.scss';
import { useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';

const AboutCard = () => {

  const { user } = useContext(authContext);

  return (
    <Card className='profile-card-contents' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={user.avatar_url}
        alt="profile-photo"
      />
        <Fab color="secondary" size="small" aria-label="edit">
          <EditIcon />
        </Fab>
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
        <Button size="small">Edit Details</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}

export default AboutCard;