import { Card, CardContent, Table, TableBody, Typography } from '@mui/material'
import FollowListItem from './FollowListItem'

const FollowList = () => {
  
  return (
    <Card className='info-card-contents' sx={{ maxWidth: 345 }}>
      <CardContent>
      <Typography gutterBottom variant="h4">
          Follows
      </Typography>
      <Table sx={{minWidth: 300}} size="small" aria-label="a dense table">
        <TableBody>
          {/* map multiple FollowListItem components here based on follows database table */}
          <FollowListItem initials="RM" name="Ryan MacEachern" />
          <FollowListItem initials="RW" name="Ryan Williams" />
          <FollowListItem initials="HM" name="Hannah Montana" />
        </TableBody>
      </Table>
      </CardContent>
    </Card>
  );
}

export default FollowList;
