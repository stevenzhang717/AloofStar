import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { fetchPosts } from '../actions/posts';
import TitleRow from './PostTitleRow';

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    if (this.props.posts.loading) {
      return <h1>Loading</h1>;
    }
    return (
      <div className="page--content">
        <h1 style={{ display: 'inline', textAlign: 'right' }}>All Posts</h1>
        {this.props.session && this.props.session.isAuthenticated() ? (
          <Button variant="flat" href="posts/create">
            Create Post
          </Button>
        ) : (
          ''
        )}
        <ul>
          {this.props.posts.result.map(p => (
            <li>
              <TitleRow key={p.id} title={p.title} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
