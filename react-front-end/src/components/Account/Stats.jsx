import { Card, CardContent, Typography, CardActions, Button } from '@mui/material'

const Stats = (props) => {

  const { totals } = props

  return (
    <Card className='info-card-contents' sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h4">
          Stats
        </Typography>
        <ul className='info-card'>
          <dt><strong>Total Score</strong></dt>
          <dd className='scorecard-number'>{totals.total_score || 0}</dd>
          <dt><strong>Games Played</strong></dt>
          <dd className='scorecard-number'>{totals.games_played || 0}</dd>
          {/* <dt><strong>Last Game Score</strong></dt>
          <dd className='scorecard-number'>3789</dd>
          <dt><strong>Last Week Score</strong></dt>
          <dd className='scorecard-number'>4192</dd>
          <dt><strong>Highest Streak</strong></dt>
          <dd className='scorecard-number'>5</dd> */}
        </ul>
      </CardContent>
      <CardActions>
        <Button size="small">Share Scores</Button>
      </CardActions>
    </Card>
  );
}

export default Stats;
