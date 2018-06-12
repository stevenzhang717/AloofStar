import * as sessionAction from '../actions/session';

export default function(state = null, action) {
  switch (action.type) {
    case sessionAction.SET_SESSION:
      return action.session;
    case sessionAction.SET_SESSION_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
