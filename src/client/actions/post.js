import axios from 'axios';

export const RECEIVED_POST = 'RECEIVED_POST';
export const receivedPost = post => ({
  type: RECEIVED_POST,
  post
});

export const fetchPost = id => dispatch => {
  axios.get(`/api/posts/${id}`).then(response => dispatch(receivedPost(response.data)));
};
