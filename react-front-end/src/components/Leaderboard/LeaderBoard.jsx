import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const createData = (firstName, lastName, totalScore, gamesPlayed) => {
  return { firstName, lastName, totalScore, gamesPlayed };
};


const Leaderboard = (props) => {
  const { leaderboardData } = props;
  console.log("leaderboardData:", leaderboardData)
  
  const rows = leaderboardData.map(user => {
    const { first_name, last_name, games_played, total_score } = user;
    return createData(first_name, last_name, total_score, games_played)
  })
    
    // createData("Ryan MacEachern", 5185, 26, 160, 1450),
    // createData("Zarah Liao", 4225, 18, 175, 850),
    // createData("Ryan Williams", 3995, 16, 190, 745)
  
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 350}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Total Score</TableCell>
            {/* <TableCell align="right">Games Played</TableCell> */}
            {/* <TableCell align="right">Last Game Score</TableCell> */}
            {/* <TableCell align="right">Last Week Score</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.last_name}
              sx={{ '&:last-child td, &:last-child th': {border: 0} }}
            >
              <TableCell component="th" scope="row">
                {row.first_name} {row.last_name}
              </TableCell>
              <TableCell align="right">{row.totalScore}</TableCell>
              {/* <TableCell align="right">{row.gamesPlayed}</TableCell> */}
              {/* <TableCell align="right">{row.lastGameScore}</TableCell> */}
              {/* <TableCell align="right">{row.lastWeekScore}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Leaderboard
