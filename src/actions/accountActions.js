import authService from '../services/authService';

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS';
export const SILENT_LOGGIN = '@ACCOUNT/SILENT_LOGGIN';
export const SIGNOUT = '@ACCOUNT/SIGNOUT';

const signIn = (email, password) => {
  return async (dispatch) => {
    const user = await authService.signIn(email, password);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user: user
      }
    });
  }
}

const setUserData = () => {
  return async (dispatch) => {
    const user = await authService.signInWithToken();
    dispatch({
      type: SILENT_LOGGIN,
      payload: {
        user: user
      }
    });
  }
}

const signOut = () => {
  return async (dispatch) => {
    await authService.signOut();
    dispatch({
      type: SIGNOUT,
    });
  }
}

export {
  signIn,
  setUserData,
  signOut
};