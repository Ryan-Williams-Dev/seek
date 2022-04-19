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
        <Typography>
          
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
