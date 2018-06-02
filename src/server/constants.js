const sessionError = {
  EMPTY_PASSWORD: 'EMPTY_PASSWORD',
  EMPTY_USERNAME: 'EMPTY_USERNAME'
};

const loginErrors = {
  USER_NOT_EXIST: 'USER_NOT_EXIST',
  WRONG_PASSWORD: 'WRONG_PASSWORD'
};

const signupError = {
  USED_USERNAME: 'USED_USERNAME'
};

const postsError = {
  UNAUTHORIZED: 'UNAUTHORIZED'
};

module.exports = {
  sessionError,
  loginErrors,
  signupError,
  postsError
};
