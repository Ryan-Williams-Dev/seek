import { Card, CardActions, CardContent, CardMedia, Typography, Button, Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './about-card-styles.scss';

const AboutCard = () => {
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
          Zarah Liao
        </Typography>
        <ul className='about-list'>
          <dt><strong>Email</strong></dt>
          <dd>zarah101@hotmail.com</dd>
          <dt><strong>Location</strong></dt>
          <dd>Vancouver, BC, Canada</dd>
          <dt><strong>Streak</strong></dt>
          <dd>5</dd>
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
