import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Like, Comment } from '../../../';

import {
  createComment,
  fetchPhotoInfo
} from '../../../../actions';

class CommentForm extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        body: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let comment = {
      body: this.state.body, 
      postId: this.props._id
    }

    this.props.dispatch(createComment(comment));
    this.setState({
      body: ''
    })
  }

  handleChange(e) {
    this.setState({
      body: e.target.value
    });
  }

  componentWillUpdate() {
    if (this.props.isAuthenticated) {
      return true;
    }
  }

  render() {
    return (
  		<div className="FeedItem__addcomment">
        <form onSubmit={this.handleSubmit}>
          <input id="body" type="text" value={this.state.body} onChange={this.handleChange} name="body" placeholder="Say something nice!"/>
        </form>
  		</div>
    );
  }
}

const mapStateToProps = state => ({
  isSubmitting: false,
  auth: state.auth
})

export default connect(mapStateToProps)(CommentForm);
