import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import 'react-quill/dist/quill.snow.css';

import './EditPostForm.css';
import { submitPost } from '../actions/posts';

class EditPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.handleTitleChange = this.handleFieldChange('title');
    this.handleContentChange = this.handleFieldChange('content');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state, () => this.props.history.push('/posts'));
  }

  handleFieldChange(field) {
    return event => {
      if (typeof event === 'string') {
        this.setState({ [field]: event });
      } else {
        this.setState({ [field]: event.target.value });
      }
    };
  }

  render() {
    return (
      <div className="page--content">
        <h1>Create New Posts</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Title:
            <input
              name="title"
              id="title"
              className="post--input--title"
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </label>
          <p>{this.props.error.title}</p>
          <div style={{ height: '50vh' }}>
            <ReactQuill
              style={{ height: '40vh' }}
              name="content"
              type="text"
              value={this.state.content || ''}
              onChange={this.handleContentChange}
            />
          </div>
          <p>{this.props.error.content}</p>
          <div>
            <Button variant="flat" type="submit" value="Submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

EditPostForm.propTypes = {
  error: PropTypes.shape(),
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

EditPostForm.defaultProps = {
  error: {}
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (post, onSubmitted) => {
    dispatch(submitPost(post, onSubmitted));
  }
});

const mapStateToProp = state => ({
  error: state.posts.error
});

export default connect(mapStateToProp, mapDispatchToProps)(EditPostForm);
