import { AppBar, IconButton, Menu, Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = ()=>{
  return(<div>
    <AppBar color="primary" position="static">
     <Toolbar>
       <IconButton color="inherit">
           <MenuIcon />
       </IconButton>
       <Typography varient="h1">Live Score</Typography>
     </Toolbar>

    </AppBar>
  </div>);

};

export default Navbar;