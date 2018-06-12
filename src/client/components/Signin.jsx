import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import Input from './LabeledInput';

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
    this.props.setSessionError('');
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitSignin(this.state, () => this.props.history.push('/posts'));
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

    if (this.props.session && this.props.session.error) {
      switch (this.props.session.error) {
        case sessionError.EMPTY_USERNAME:
          error.username = 'Username cannot be empty.';
          break;
        case sessionError.EMPTY_PASSWORD:
          error.password = 'Password cannot be empty.';
          break;
        case loginErrors.USER_NOT_EXIST:
          error.username = 'User does not exist.';
          break;
        case loginErrors.WRONG_PASSWORD:
          error.password = 'Wrong password.';
          break;
        default:
          break;
      }
    }

    return (
      <div className="page--content">
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="User Name"
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            error={error.username}
          />
          <Input
            name="password"
            label="Password"
            className="password"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            error={error.password}
          />

          <Button variant="flat" type="submit" value="Submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

SignIn.defaultProps = {
  session: { error: '' }
};

SignIn.propTypes = {
  submitSignin: PropTypes.func.isRequired,
  setSessionError: PropTypes.func.isRequired,
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

const mapDispatchToProps = dispatch => ({
  submitSignin: (credentials, onSubmitted) => {
    dispatch(submitSignin(credentials, onSubmitted));
  },
  setSessionError: error => {
    dispatch(setSessionError(error));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
