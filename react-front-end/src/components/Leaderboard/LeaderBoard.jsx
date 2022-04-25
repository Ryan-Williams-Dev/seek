import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import './leaderboard.scss'

const createData = (firstName, lastName, totalScore, gamesPlayed, username) => {
  return { firstName, lastName, totalScore, gamesPlayed, username };
};

const Leaderboard = (props) => {
  const { leaderboardData, followsDailyScores } = props;
  
  const rows = leaderboardData && leaderboardData.map(user => {
    const { first_name, last_name, games_played, total_score, username } = user;
    return createData(first_name, last_name, total_score, games_played, username)
  });
    
  return (
    <>
      <h3>Global Leaderboard</h3>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 350}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>UserName</TableCell>
              {/* <TableCell align="right">Todays Game Score</TableCell> */}
              <TableCell align="right" className='ldrbrd-column' id="total-score">Total Score</TableCell>
              <TableCell align="right" className='ldrbrd-column' id="games-played">Games Played</TableCell>
              {/* <TableCell align="right" className='ldrbrd-column' id="todays-day-score">Today's Game Score</TableCell> */}
              {/* <TableCell align="right" className='ldrbrd-column' id="last-week-score">Last Week Score</TableCell> */}
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
                <TableCell align="right" className='ldrbrd-column' id="total-score">{row.totalScore}</TableCell>
                <TableCell align="right" className='ldrbrd-column' id="games-played">{row.gamesPlayed}</TableCell>
                {/* <TableCell align="right" className='ldrbrd-column' id="todays-day-score">{row.todaysGameScore}</TableCell> */}
                {/* <TableCell align="right" className='ldrbrd-column' id="last-week-score">{row.lastWeekScore}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h3>Friend's Scores Today</h3>

      <TableContainer component={Paper}>
        <Table sx={{minWidth: 350}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
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
