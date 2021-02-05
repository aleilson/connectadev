import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from './components/Auth';
import GuestRoute from './routes/GuestRoute';
import SignIn from './pages/SigIn/index';
import SignUp from './pages/SignUp/index';
import Home from './pages/Home/index';
// import theme from './theme/index';
import createTheme  from './theme';
import {useSettings} from './context/SettingsContext';

import './mock'

function App() {
  const {settings} = useSettings();

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <BrowserRouter>
        <Auth>
          <Routes>
            <GuestRoute path="/sign-in" element={<SignIn />} />
            <GuestRoute path="/sign-up" element={<SignUp />} />
            <Route path="//*" element={<Home />} />
          </Routes>
        </Auth>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
