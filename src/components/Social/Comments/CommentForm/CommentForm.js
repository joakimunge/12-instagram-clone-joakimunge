import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CommentForm.css';

import {
  createComment
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
      author: this.props.auth.user._id,
      username: this.props.auth.user.username, 
      postId: this.props._id,
      source: this.props.source

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
        <form onSubmit={this.handleSubmit} className="comment__form">
          <input id="body" type="text" value={this.state.body} onChange={this.handleChange} name="body" placeholder="Say something nice!" required/>
          <span onClick={this.handleSubmit} className="comment__submit"><i className="far fa-paper-plane"></i></span>
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
