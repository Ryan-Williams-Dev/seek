import { Avatar, TableRow, TableCell } from '@mui/material'
import { deepOrange } from '@mui/material/colors';

const FollowListItem = (props) => {
  const {initials, name} = props;
  
  return (
    <TableRow className='follow-list-item'>
      <TableCell>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>{initials}</Avatar>
      </TableCell>
      <TableCell>
        <p>{name}</p>
      </TableCell>
    </TableRow>
  );
}

export default FollowListItem;
