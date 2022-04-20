import { Avatar, TableRow, TableCell } from '@mui/material'
import { stringAvatar } from '../../helpers/maps/avatar-helpers';

const FollowListItem = (props) => {
  const {initials, name} = props;
  
  return (
    <TableRow className='follow-list-item'>
      <TableCell>
        <Avatar {...stringAvatar(`${name}`)}>{initials}</Avatar>
      </TableCell>
      <TableCell>
        <p>{name}</p>
      </TableCell>
    </TableRow>
  );
}

export default FollowListItem;
