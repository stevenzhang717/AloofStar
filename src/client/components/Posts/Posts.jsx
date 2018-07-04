import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { fetchPosts } from '../../actions/posts';
import './Posts.css';
import TitleRow from '../Shared/PostTitleRow';

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    if (this.props.posts.loading) {
      return (
        <div className="posts">
          <h2>Loading</h2>
        </div>
      );
    }
    return (
      <div className="posts">
        <div className="posts-title-row">
          <h1>All Posts</h1>
          {this.props.session &&
          this.props.session.isAuthenticated &&
          this.props.session.isAuthenticated() ? (
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="posts/create">
              <Button variant="flat">Create Post</Button>
            </Link>
          ) : null}
        </div>
        <ul>
          {this.props.posts.result.map(p => (
            <li key={p.id}>
              <TitleRow title={p.title} link={`/post/${p.id}`} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Posts.defaultProps = { posts: [], session: {} };

Posts.propTypes = {
  posts: PropTypes.shape(),
  fetchPosts: PropTypes.func.isRequired,
  session: PropTypes.shape()
};

const mapStateToProps = state => ({
  posts: state.posts,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
