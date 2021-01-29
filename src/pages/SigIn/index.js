import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh'
  },

  left: {
    background: 'blue',
    flexGrow: 0,
    flexBasis: '58%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  right: {
    background: 'yellow',
    flexGrow: 0,
    flexBasis: '42%'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '64px 32px',
    alignItems: 'center'
  }
}))

function SigIn() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <Typography style={{color: '#fff', fontSize: 35, lineHeight: '45px'}}>
          <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
        </Typography>

        <Typography variant="body2" style={{color: 'rgb(255, 255, 255, 0.7', marginTop: 30, fontSize: 15, lineHeight: '45px'}}>
          Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
        </Typography>
      </div>

      <div className={classes.right}>
        <form className={classes.form}>
          <h4>Acesso</h4>
          <input type="text"/>
          <input type="text"/>
        </form>
      </div>
    </div>
  )
}

export default SigIn;