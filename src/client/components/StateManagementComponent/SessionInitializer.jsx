import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import createSession from '../../model/session';
import { setSession } from '../../actions/session';

class SessionInitializer extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token && !this.props.session) {
      this.props.setSessionFromToken(token);
    }
  }

  render() {
    return null;
  }
}

SessionInitializer.propTypes = {
  session: PropTypes.shape(),
  setSessionFromToken: PropTypes.func.isRequired
};

SessionInitializer.defaultProps = {
  session: null
};

const mapStateToProps = state => ({
  session: state.session
});
const mapDispatchToProps = dispatch => ({
  setSessionFromToken: token => dispatch(setSession(createSession(token)))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionInitializer);
