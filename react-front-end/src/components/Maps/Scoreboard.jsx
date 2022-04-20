import { Leaderboard, Share } from "@mui/icons-material";
import { Button, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";


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

      <Typography 
        variant="h4" 
        component="div"
        sx={{color: '#ad0b0b' }}
      >
        Score: {props.score}
      </Typography>

      <Typography 
        variant="h4" 
        component="div"
        sx={{textAlign: 'center'}}
      >
        Distance: {props.distance}km
      </Typography>

      <div className="scoreboard-buttons">

        <Button
          variant="contained"
          endIcon={<Share />}
        >
          Share
        </Button>

        <Link to="/leaderboards">
          <Button
            variant="contained"
            endIcon={<Leaderboard />}
          >
            LeaderBoards
          </Button>
        </Link>

      </div>

    </Card>
  );
}

export default Scoreboard;
