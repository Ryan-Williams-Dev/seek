import { Card, CardActions, CardContent, CardMedia, Typography, Button, Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './about-card-styles.scss';

const AboutCard = (props) => {
  const { first_name, last_name, email } = props.userData;
  
  return (
    <Card className='profile-card-contents' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/avatar1.jpg"
        alt="profile-photo"
      />
        <Fab color="secondary" size="small" aria-label="edit">
          <EditIcon />
        </Fab>
      <CardContent>
        <Typography gutterBottom variant="h4">
          {first_name} {last_name}
        </Typography>
        <ul className='about-list'>
          <dt><strong>Email</strong></dt>
          <dd>{email}</dd>
          <dt><strong>Location</strong></dt>
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