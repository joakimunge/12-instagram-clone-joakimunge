import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps)(CommentContainer);
