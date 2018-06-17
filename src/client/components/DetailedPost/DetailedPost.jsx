import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './DetailedPost.css';

import { fetchPost } from '../../actions/post';

class DetailedPost extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    return (
      <div className="detailed-post">
        <h1>{this.props.post.title}</h1>
        <div
          className="detailed-post-content"
          dangerouslySetInnerHTML={{ __html: this.props.post.content }}
        />
      </div>
    );
  }
}

DetailedPost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string
  }).isRequired,
  fetchPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedPost);
