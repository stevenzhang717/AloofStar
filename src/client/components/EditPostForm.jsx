import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';
import 'react-quill/dist/quill.snow.css';

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
    this.props.dispatch(submitPost(this.state, () => this.props.history.push('/posts')));
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
          <ReactQuill
            name="content"
            type="text"
            value={this.state.content || ''}
            onChange={this.handleContentChange}
          />
          <p>{this.props.error.content}</p>
          <input className="post--input--submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

EditPostForm.propTypes = {
  error: PropTypes.shape(),
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

EditPostForm.defaultProps = {
  error: {}
};

const mapStateToProp = state => ({
  error: state.posts.error
});

export default connect(mapStateToProp)(EditPostForm);
