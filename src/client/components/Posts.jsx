import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';

class Posts extends React.Component {
  static renderPost(post) {
    return (
      <div className="post--section" key={post.id}>
        <h2>{post.title}</h2>
        <div className="post--content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    if (this.props.posts.loading) {
      return <h1>Loading</h1>;
    }
    return (
      <div className="page--content">
        <h1>All Posts</h1>
        <Link to="posts/create">Create Post</Link>
        {this.props.posts.result.map(x => this.constructor.renderPost(x))}
      </div>
    );
  }
}

Posts.defaultProps = { posts: [] };

Posts.propTypes = {
  posts: PropTypes.shape(),
  fetchPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts,
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts)
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
