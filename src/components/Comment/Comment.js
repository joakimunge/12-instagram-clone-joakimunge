import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Comment.css';

class Comment extends Component {
	 constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	// this.props.dispatch(deleteComment(comment))
  }

	render() {
    const comment = this.props;
    return <div className="FeedItem__comment">
            <Link to={`/users/${comment.author}`}><span className="FeedItem__username">{comment.author}</span></Link>
            <p className="FeedItem__comment__body">{comment.body}</p>
            <span onClick={this.handleClick} className="FeedItem__comment__delete"><i className="fas fa-times"></i></span>
          </div>
	}
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Comment);
