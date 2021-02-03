import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import NewPost from '../Post/New';
import Feed from '../Feed';
import { Routes, Route } from 'react-router';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    height: 'calc(100vh - 64px)',
    padding: 24
  },
  toolbar: {
    minHeight: '64px',
  }
})

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar} />
      <main className={classes.main}>
          <Routes>
            <Route path='/' element={ <Feed/>} />
            <Route path='/feed' element={ <Feed/>} />
            <Route path='/post/new' element={ <NewPost /> } />
            <Route path="*" element={<h1>NOT FOUND 404!</h1>} />
          </Routes>
      </main>
    </div>
  )
}

export default Home;