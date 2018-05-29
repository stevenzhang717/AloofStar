import * as sessionAction from '../actions/session';

const DEFAULT = {
  id: '',
  user: '',
  isAuthenticated: () => false,
  error: ''
};

export default function(state = DEFAULT, action) {
  switch (action.type) {
    case sessionAction.SET_SESSION:
      return { ...DEFAULT, ...action.session };
    case sessionAction.SET_SESSION_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
