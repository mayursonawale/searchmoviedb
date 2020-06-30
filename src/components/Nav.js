import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const StyledAppBar = withStyles({

  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
})(AppBar);

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    
    title: {
      flexGrow: 1,
    },
  }));

const Nav = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <StyledAppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>Movie Collection</Typography>
                </Toolbar>
            </StyledAppBar>
        </div>
    );
}

export default Nav;
