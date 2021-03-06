import React, { Component } from 'react';
import { Comment } from '../../';

class CommentContainer extends Component {

  render() {
    const {comments} = this.props;
    return (
  		<div className="FeedItem__comments">
        {
          comments.map((comment, key) => {
            return <Comment key={key} {...comments[key]} /> 
          })
        }
      </div>
    );
  }
}

export default CommentContainer;
