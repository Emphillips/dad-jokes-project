import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../App.css';
// Router Link
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
		flexGrow: 1,
		
  },
  title: {
		flexGrow: 1,
  },
}));



export default function NavBar() {
  const classes = useStyles();
      return(
        <div className={classes.root}>
        <AppBar style={{ background: '#1D8348' }} position="static">
          <Toolbar>
            <Typography variant="h6"  color="inherit" className={classes.title}>
              
            </Typography>
          <li className="navMenu-link">
            <Link to="/SignIn">Sign In</Link>
            </li>
            <li className="navMenu-link">
            <Link to="/JokeList">Joke List</Link>
            </li>
            
          </Toolbar>
        </AppBar>
      </div>
      );

};