import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Avatar, Like, Comment, CommentForm, CommentContainer } from '../';
import './FeedItem.css';

import {
  createComment
} from '../../actions';

class FeedItem extends Component {

  constructor(props) {
    super(props);
  } 

  render() {
    const {post, isSubmitting} = this.props;
    return (
      <article className="FeedItem">
      	<div className="FeedItem__user">
      		<Avatar url={post.author.avatar} />
      		<Link to={`/users/${post.author.username}`} ><span className="FeedItem__username">{post.author.username}</span></Link>
      	</div>
      	<div className="FeedItem__image">
      		<img src={post.image} alt="Feeditem" />
      	</div>
      	<div className="FeedItem__social">
      		<div className="FeedItem__interactions">
      			<ul>
      				<Like {...post}/>
      				<li><i className="far fa-comment"></i></li>
      				<li>{post.likes.length} Likes</li>
      			</ul>
      		</div>
      		<div className="FeedItem__description">
      			<span className="FeedItem__username">{post.author.username}</span>
      			<p>{post.description}</p>
      		</div>
          <CommentContainer {...post}/>
      		<CommentForm {...post} />
      	</div>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  isSubmitting: false
})

export default connect(mapStateToProps)(FeedItem);
