import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { signout } from '../actions/session';

const Navigation = props => (
  <header>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
          <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
            Steven Zhang
          </Link>
        </Typography>
        <Button color="inherit" size="large" href="/posts">
          Posts
        </Button>
        {props.session && props.session.isAuthenticated && props.session.isAuthenticated() ? (
          <Button color="inherit" size="large" onClick={props.onSignout}>
            Signout
          </Button>
        ) : (
          <span>
            <Button color="inherit" size="large" href="/signin">
              Signin
            </Button>
            <Button color="inherit" size="large" href="/signup">
              Signup
            </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
