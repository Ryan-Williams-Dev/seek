import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const createData = (name, totalScore, gamesPlayed, lastGameScore, lastWeekScore) => {
  return { name, totalScore, gamesPlayed, lastGameScore, lastWeekScore };
}

const rows = [
  createData("Ryan MacEachern", 5185, 26, 160, 1450),
  createData("Zarah Liao", 4225, 18, 175, 850),
  createData("Ryan Williams", 3995, 16, 190, 745)
]

export default function Leaderboard() {
  return (
    
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Total Score</TableCell>
            <TableCell align="right">Games Played</TableCell>
            <TableCell align="right">Last Game Score</TableCell>
            <TableCell align="right">Last Week Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': {border: 0} }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.totalScore}</TableCell>
              <TableCell align="right">{row.gamesPlayed}</TableCell>
              <TableCell align="right">{row.lastGameScore}</TableCell>
              <TableCell align="right">{row.lastWeekScore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
