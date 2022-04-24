import { Card, CardContent, Table, TableBody, Typography } from '@mui/material'
import FollowListItem from './FollowListItem'

const FollowList = (props) => {

  const { follows } = props;

  const followList = follows.map((user, index) => {
    const { first_name, last_name } = user
    const initials = first_name[0] + last_name[0]
    const fullName = `${first_name} ${last_name}` 
    return(
      <FollowListItem key={index} initials={initials} name={fullName} />
    );
  })
  
  return (
    <Card className='info-card-contents' sx={{ maxWidth: 345 }}>
      <CardContent>
      <Typography gutterBottom variant="h4">
          Follows
      </Typography>
      <Table sx={{minWidth: 300}} size="small" aria-label="a dense table">
        <TableBody>
          {followList}
        </TableBody>
      </Table>
      </CardContent>
    </Card>
  );
}

export default FollowList;
