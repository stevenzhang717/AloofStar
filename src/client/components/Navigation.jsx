import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signout } from '../actions/session';

const Navigation = props => (
  <header>
    <nav>
      <ul className="nav--list">
        <li className="nav--listItem--left">
          <Link className="nav--link" to="/">
            Home
          </Link>
        </li>
        <li className="nav--listItem--left">
          <Link className="nav--link" to="/posts">
            Posts
          </Link>
        </li>
        <li className="nav--listItem--left">About</li>
        <li className="nav--listItem--left">Contact</li>
        {props.session.isAuthenticated() ? (
          <span>
            <li className="nav--listItem--right">
              <Link className="nav--link" to="/" onClick={props.onSignout}>
                Sign Out
              </Link>
            </li>
            <li className="nav--listItem--right">{props.session.name}</li>
          </span>
        ) : (
          <span>
            <li className="nav--listItem--right">
              <Link className="nav--link" to="/signin">
                Sign In
              </Link>
            </li>
            <li className="nav--listItem--right">
              <Link className="nav--link" to="/signup">
                Sign Up
              </Link>
            </li>
          </span>
        )}
      </ul>
    </nav>
  </header>
);

Navigation.propTypes = {
  session: PropTypes.shape().isRequired,
  onSignout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onSignout: () => dispatch(signout)
});

const mapStateToProps = state => ({
  session: state.session
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
