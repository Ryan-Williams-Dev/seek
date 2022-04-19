import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import './about-card-styles.scss'

const AboutCard = () => {
  return (
    <Card className='profile-card' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/avatar1.jpg"
        alt="profile-photo"
      />
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
    </Card>
  );
}

export default AboutCard;
