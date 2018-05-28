import axios from 'axios';
import createSession from '../model/session';

export const SET_SESSION = 'SET_SESSION';
export const setSession = session => ({
  type: SET_SESSION,
  session
});

export const SET_SESSION_ERROR = 'SET_SESSION_ERROR';
export const setSessionError = error => ({
  type: SET_SESSION_ERROR,
  error
});

export const submitSignin = (credentials, onSignIn) => dispatch => {
  axios
    .post('/api/users/signin', credentials)
    .then(result => {
      localStorage.setItem('token', result.data.token);
      dispatch(setSession(createSession()));
      onSignIn();
    })
    .catch(error => {
      dispatch(setSessionError(error.response.data.error));
    });
};

export const submitSignup = (registration, onSignup) => dispatch => {
  axios
    .post('/api/users/signup', registration)
    .then(result => {
      localStorage.setItem('token', result.data.token);
      dispatch(setSession(createSession()));
      onSignup();
    })
    .catch(error => {
      dispatch(setSessionError(error.response.data.error));
    });
};

export const signout = dispatch => {
  localStorage.removeItem('token');
  dispatch(setSession());
};
