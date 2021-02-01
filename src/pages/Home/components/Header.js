import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';


const useStyles = makeStyles({
  appBar: {
    boxShadow: 'none',
  },
  img: {
    maxHeight: 55,
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    marginRight: 10
  },
  bell: {
    marginRight: 10
  }
});

function Header() {
  const classes = useStyles();
  const user = useSelector(state => state.user);
  console.log(user)

  return (
    <AppBar position='fixed' color='inherit' className={classes.appBar}>
      <Toolbar>
        <img className={classes.img} src="/images/logo.png" alt="Connecta Dev"/>
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Button 
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Novo Post
          </Button>
          <SvgIcon className={classes.bell}>
            <Bell></Bell>
          </SvgIcon>
          <Avatar alt="Remy Sharp" src={user && user.avatar} />
        </div>
        {/* <div className="">
          <a href='/'>Conecta Dev</a>
        </div>
        <div className="">
          <Button 
            color="primary"
            variant="contained"
          >
            Novo Post
          </Button>
          <span>img1</span>
          <span>img2</span>
        </div> */}
      </Toolbar>
    </AppBar>
  )
}

export default Header;