import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button, makeStyles} from '@material-ui/core';
import './header.scss';
// import {redux}; // gives access to that "slice"
 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: theme.red
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header () {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" id="testingColor">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            HAMPTRON EMPORIUM
          </Typography>
          <Button color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;