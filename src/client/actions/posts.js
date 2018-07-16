import axios from 'axios';

export const FETCHING_POSTS = 'FETCHING_POSTS';
export const fetching = () => ({
  type: FETCHING_POSTS
});

export const RECEIVED_POSTS = 'RECEIVED_POSTS';
export const received = posts => ({
  type: RECEIVED_POSTS,
  posts
});

export const SUBMITTING_POST = 'SUBMITTING_POST';
export const submitting = () => ({
  type: SUBMITTING_POST
});

export const VALIDATE_FAILED = 'VALIDATE_FAILED';
export const validateFailed = error => ({
  type: VALIDATE_FAILED,
  error
});

export const fetchPosts = dispatch => {
  dispatch(fetching());
  axios.get('/api/posts').then(response => dispatch(received(response.data)));
};

export const submitPost = (post, onSubmitted) => dispatch => {
  dispatch(submitting());
  const error = {};
  if (!post.title) {
    error.title = 'Title cannot be empty';
  }

  if (!post.content) {
    error.content = 'Content cannot be empty';
  }

  if (!error.title && !error.content) {
    axios
      .post('/api/posts', post, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(result => onSubmitted(result));
  } else {
    dispatch(validateFailed(error));
  }
};
