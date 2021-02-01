import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import GuestRoute from './routes/GuestRoute';
import SigIn from './pages/SigIn/index';
import Home from './pages/Home/index';
import theme from './theme/index';
import store from './store'

import './mock'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <GuestRoute path="/sign-in" element={<SigIn />} />
            <Route path="*" element={<h1>NOT FOUND 404!</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
