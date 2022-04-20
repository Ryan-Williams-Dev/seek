import { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawerlist from './DrawerList';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function ButtonAppBar(props) {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };


  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
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
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              SEEK
            </Typography>
            <Button variant='outlined' color="inherit" >Login</Button>
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