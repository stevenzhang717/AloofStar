import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { signout } from '../../actions/session';

const Navigation = props => (
  <header>
    <AppBar position="static">
      <Toolbar>
        <Link style={{ color: 'inherit', textDecoration: 'inherit', flex: 1 }} to="/">
          <Typography variant="headline" color="inherit">
            Steven Zhang
          </Typography>
        </Link>
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/posts">
          <Button color="inherit" size="large">
            Posts
          </Button>
        </Link>
        {props.session && props.session.isAuthenticated && props.session.isAuthenticated() ? (
          <Button color="inherit" size="large" onClick={props.onSignout}>
            Signout
          </Button>
        ) : (
          <span>
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/signin">
              <Button color="inherit" size="large">
                Sign In
              </Button>
            </Link>
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/signup">
              <Button color="inherit" size="large">
                Sign Up
              </Button>
            </Link>
          </span>
        )}
      </Toolbar>
    </AppBar>
  </header>
);

Navigation.propTypes = {
  session: PropTypes.shape(),
  onSignout: PropTypes.func.isRequired
};

Navigation.defaultProps = {
  session: null
};

const mapDispatchToProps = dispatch => ({
  onSignout: () => dispatch(signout)
});

const mapStateToProps = state => ({
  session: state.session
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
