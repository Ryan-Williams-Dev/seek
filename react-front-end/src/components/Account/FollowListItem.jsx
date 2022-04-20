import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors';

const FollowListItem = () => {
  return (
    <div className='follow-list-item'>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>RM</Avatar>
      <p>Ryan MacEachern</p>
    </div>
  );
}

export default FollowListItem;
