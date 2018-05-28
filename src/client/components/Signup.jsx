import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import { submitSignup } from '../actions/session';
import { sessionError, signupError } from '../../shared/constants';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleUsernameChange = this.handleFieldChange.bind(this, 'username');
    this.handlePasswordChange = this.handleFieldChange.bind(this, 'password');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(submitSignup(this.state, () => this.props.history.push('/')));
  }

  handleFieldChange(field, event) {
    if (typeof event === 'string') {
      this.setStatse({ [field]: event });
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
        error.password = 'Password cannot be empty';
        break;
      case signupError.USED_USERNAME:
        error.username = 'Username has already been taken.';
        break;
      default:
        break;
    }

    return (
      <div className="page--content">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">
              User Name:
              <input
                name="username"
                id="username"
                className="signup--input--username"
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </label>
            <p>{error.username}</p>
          </div>
          <div>
            <label htmlFor="password">
              Password
              <input
                name="password"
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </label>
            <p>{error.password}</p>
          </div>
          <input className="signup--input--submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

Signup.defaultProps = {
  session: { error: '' }
};

Signup.propTypes = {
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

export default connect(mapStateToProps)(Signup);
