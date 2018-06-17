import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const PostTitleRow = props => (
  <Typography variant="headline" gutterBottom>
    <Link to={props.link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
      {props.title}
    </Link>
  </Typography>
);

PostTitleRow.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default PostTitleRow;
