import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '@material-ui/core';
import Input from '../Shared/RegistrationRow';
import './Signup.css';

import { submitSignup } from '../../actions/session';
import { sessionError, signupError } from '../../../shared/constants';

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
    this.props.submitSignup(this.state, () => this.props.history.push('/'));
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

    if (this.props.session && this.props.session.error) {
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
    }

    return (
      <div className="signup">
        <h1>Sign Up</h1>
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

Signup.defaultProps = {
  session: { error: '' }
};

Signup.propTypes = {
  submitSignup: PropTypes.func.isRequired,
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
  submitSignup: (info, onSubmitted) => {
    dispatch(submitSignup(info, onSubmitted));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
