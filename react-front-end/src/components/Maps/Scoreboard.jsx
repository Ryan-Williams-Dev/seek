import { Leaderboard, Share } from "@mui/icons-material";
import { Button, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Scoreboard = (props) => {
  const { score, distance } = props

  // Links only to home page at the moment, update this with game id when we have that being pulled from the backend
  const sharelink = () => {
    const shareURL = process.env.REACT_APP_FRONT_END_BASE_URL
    const message = `🌎  I just scored ${score} point${score > 1 ? 's' : ''} on SEEK!\n\n 📍 My Guess was ${distance}km from the mystery location.\n\n 🕵️‍♀️ Follow this link to see how close you can get:\n\n ➡️ ${shareURL} ⬅️`

    navigator.clipboard.writeText(message)
  }

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
        Score: {score}
      </Typography>

      <Typography 
        variant="h4" 
        component="div"
        sx={{textAlign: 'center'}}
      >
        Distance: {distance}km
      </Typography>

      <div className="scoreboard-buttons">

        <Button
          variant="contained"
          endIcon={<Share />}
          onClick={sharelink}
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
