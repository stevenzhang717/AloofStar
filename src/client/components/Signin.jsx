import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { submitSignin, setSessionError } from '../actions/session';
import { sessionError, loginErrors } from '../../shared/constants';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleUsernameChange = this.handleFieldChange.bind(this, 'username');
    this.handlePasswordChange = this.handleFieldChange.bind(this, 'password');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.dispatch(setSessionError(''));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(submitSignin(this.state, () => this.props.history.push('/posts')));
  }

  handleFieldChange(field, event) {
    if (typeof event === 'string') {
      this.setState({ [field]: event });
    } else {
      this.setState({ [field]: event.target.value });
    }
  }

  render() {
    const error = { username: '', password: '' };

    switch (this.props.session.error) {
      case sessionError.EMPTY_USERNAME:
        error.username = 'Username cannot be empty.';
        break;
      case sessionError.EMPTY_PASSWORD:
        error.password = 'Password cannot be empty.';
        break;
      case loginErrors.USER_NOT_EXIST:
        error.username = 'User not exist.';
        break;
      case loginErrors.WRONG_PASSWORD:
        error.password = 'Wrong password.';
        break;
      default:
        break;
    }

    return (
      <div className="page--content">
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">
              User Name:
              <input
                name="username"
                id="username"
                className="signin--input--username"
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </label>
            <p>{error.username}</p>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                name="password"
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <p>{error.password}</p>
              <input className="signin--input--submit" type="submit" value="Submit" />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

SignIn.defaultProps = {
  session: { error: '' }
};

SignIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  session: PropTypes.shape({
    error: PropTypes.string
  })
};

const mapStateToProps = state => ({
  session: state.session
});

export default connect(mapStateToProps)(SignIn);
