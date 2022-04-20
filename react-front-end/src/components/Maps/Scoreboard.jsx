import { Card, Divider, Typography } from "@mui/material";


const Scoreboard = (props) => {
  return (
    <Card className="scoreboard">
      <Typography 
        variant="h4" 
        component="div"
        sx={{textDecorationLine: "underline"}}
      >
        {/* Score: {result.score} */}
        Results
      </Typography>
      <Divider />
      <Typography 
        variant="h4" 
        component="div"
        sx={{color: '#ad0b0b' }}
      >
        {/* Score: {result.score} */}
        Score: 4000
      </Typography>
      <Divider />
      <Typography 
        variant="h4" 
        component="div" 
      >
        {/* Score: {result.score} */}
        Distance: 367km
      </Typography>
    </Card>
  );
}

export default Scoreboard;
