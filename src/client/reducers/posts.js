import * as postsAction from '../actions/posts';

const DEFAULT = { loading: true, result: null, error: null };

export default function(state = DEFAULT, action) {
  switch (action.type) {
    case postsAction.FETCHING_POSTS: {
      return { loading: true, result: null };
    }
    case postsAction.RECEIVED_POSTS: {
      return { loading: false, result: action.posts };
    }
    case postsAction.VALIDATE_FAILED: {
      if (action.error) {
        return { loading: false, result: null, error: action.error };
      }
      return state;
    }
    default:
      return state;
  }
}
