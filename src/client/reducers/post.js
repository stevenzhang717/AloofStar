import * as postAction from '../actions/post';

export default function(state = { id: '', title: '', content: '' }, action) {
  switch (action.type) {
    case postAction.RECEIVED_POST: {
      return action.post;
    }
    default:
      return state;
  }
}
