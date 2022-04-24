import { PersonSearch } from '@mui/icons-material';
import { Card, CardContent, Table, TableBody,
  Typography, Button, InputAdornment, FormControl, 
  OutlinedInput, InputLabel, Snackbar } from '@mui/material';
import axios from 'axios';
import { useContext, useState } from 'react';
import { authContext } from '../../providers/AuthProvider';
import FollowListItem from './FollowListItem'

const FollowList = (props) => {
  const [ followUsername, setFollowUsername ] = useState('')
  const { user } = useContext(authContext)

  const [snackbar, setSnackBar] = useState({
    open: false,
    message: '',
    severity: ''
  })

  const followUser = (userId, followUsername) => {
    return axios.post('api/follows', {userId, followUsername})
      .then(r => {
        const message = r.data.message
        const severity = message === "Success" ? "success" : "warning";
        setSnackBar({
          open: true,
          message,
          severity
        })
      })
      .catch(err => {
        console.log(err)
        setSnackBar({
          open: true,
          message: err,
          severity: 'error'
        })
      })
  }

  const handleFollowSubmit = () => {
    followUser(user.id, followUsername)
    setFollowUsername('')
  }

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
    <>
      <Card className='info-card-contents' sx={{ maxWidth: 345 }}>
        <CardContent>
        <Typography gutterBottom variant="h4">
            Follows
        </Typography>
        <Table sx={{minWidth: 300, marginBottom: '2em'}} size="small" aria-label="a dense table">
          <TableBody>
            {followList}
          </TableBody>
        </Table>
        <Typography gutterBottom textAlign='center' variant="h5">
            Follow More:
        </Typography>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="username">username</InputLabel>
          <OutlinedInput
            autoComplete='off'
            label='username'
            id="username"
            value={followUsername}
            onChange={(event) => setFollowUsername(event.target.value)}
            onKeyUp={e => e.key === "Enter" && handleFollowSubmit() }
            endAdornment={<InputAdornment position="end">
                <Button 
                  endIcon={<PersonSearch />}
                  onClick={handleFollowSubmit}
                  >
                </Button>
              </InputAdornment>}
            inputProps={{
              style: {fontFamily: 'Roboto', fontSize: '1.5em', color: 'black'}
            }}
          />
        </FormControl>
        </CardContent>
      </Card>
      <Snackbar 
      open={snackbar.open}
      autoHideDuration={6000}
      onClose={() => setSnackBar({
        open: false,
        message: '',
        severity: ''
      })}
      message={snackbar.message}
      severity={snackbar.severity}
    />
  </>
  );
}

export default FollowList;
