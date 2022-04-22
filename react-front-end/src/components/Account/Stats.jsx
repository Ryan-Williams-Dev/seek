import { Card, CardContent, Typography, CardActions, Button } from '@mui/material'

const Stats = (props) => {
  const { total_score } = props.userData

  return (
    <Card className='info-card-contents' sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h4">
          Stats
        </Typography>
        <ul className='info-card'>
          <dt><strong>Total Score</strong></dt>
          <dd>{total_score}</dd>
          <dt><strong>Games Played</strong></dt>
          <dd>6</dd>
          <dt><strong>Last Game Score</strong></dt>
          <dd>3789</dd>
          <dt><strong>Last Week Score</strong></dt>
          <dd>4192</dd>
          <dt><strong>Highest Streak</strong></dt>
          <dd>5</dd>
        </ul>
      </CardContent>
      <CardActions>
        <Button size="small">Share Scores</Button>
      </CardActions>
    </Card>
  );
}

export default Stats;
