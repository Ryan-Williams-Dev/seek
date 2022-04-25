import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import './leaderboard.scss'

const createData =  (username, totalScore, gamesPlayed) => {
  return { username, totalScore, gamesPlayed };
};

const Leaderboard = (props) => {
  
  const { leaderboardData, followsDailyScores } = props;
  
  const rows = leaderboardData && leaderboardData.map(user => {
    const { username, total_score, games_played } = user;
    return createData(username, total_score, games_played)
  });
    
  return (
    <>
      <Typography 
        variant="h5" 
        component="div"
        sx={{ marginTop: '1em', marginBottom: '1em' }}
      >
        Global Leaderboard
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{minWidth: 350}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>UserName</TableCell>
              { props.filter === "Total Score" && <TableCell align="right" >Total Score</TableCell>}
              { props.filter === "Games Played" && <TableCell align="right" >Games Played</TableCell>}
              {/* <TableCell align="right">Todays Game Score</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.map(row => (
              <TableRow
                key={uuidv4()}
                sx={{ '&:last-child td, &:last-child th': {border: 0} }}
              >
                <TableCell component="th" scope="row">
                  {/* {row.firstName} {row.lastName} */}
                  {row.username}
                </TableCell>
                { props.filter === "Total Score" && <TableCell align="right" >{row.totalScore}</TableCell> }
                { props.filter === "Games Played" && <TableCell align="right" >{row.gamesPlayed}</TableCell> }
                {/* <TableCell align="right">{row.todaysGameScore}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Typography 
        variant="h5" 
        component="div"
        sx={{ marginTop: '1em', marginBottom: '1em' }}
      >
        Friends Scores Today
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{minWidth: 350}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="right">Todays Game Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {followsDailyScores && followsDailyScores.map(row => (
              <TableRow
                key={uuidv4()}
                sx={{ '&:last-child td, &:last-child th': {border: 0} }}
              >
                <TableCell component="th" scope="row">
                  {row.username}
                </TableCell>
                <TableCell align="right">{row.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Leaderboard
