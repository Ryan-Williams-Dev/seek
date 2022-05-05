import { useState, useContext } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawerlist from './DrawerList';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './nav-styles.scss'
import { authContext } from '../../providers/AuthProvider';
import { AdminPanelSettings } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function ButtonAppBar(props) {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const { auth, admin, logout } = useContext(authContext)

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Box>
        <AppBar position="fixed">
          <Toolbar>
            { auth &&
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton> 
            }
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              SEEK
            </Typography>
            { admin &&
              <Link to='/admin' >
                <AdminPanelSettings className='admin-button' sx={{marginRight: '0.5em'}} />
              </Link>
            }
            { auth && <Button variant='outlined' color="inherit" onClick={logout} >Logout</Button> }

          </Toolbar>
        </AppBar>
      </Box>
      <Drawer 
        background-color='primary'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <IconButton edge="end" onClick={toggleDrawer(false)}>
          <ArrowBackIosNewIcon />
        </IconButton>

        <Divider />

        <Drawerlist onClickItem={toggleDrawer(false)} />
      </Drawer>
    </>  
  );
}