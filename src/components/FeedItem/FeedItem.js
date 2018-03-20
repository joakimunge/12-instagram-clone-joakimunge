import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Avatar, Like, CommentForm, CommentContainer } from '../';
import './FeedItem.css';

class FeedItem extends Component {

  render() {
    const {post} = this.props;
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
      				<Like {...post} source="feed" />
      				<li><i className="far fa-comment"></i></li>
      				<li>{post.likes.length} Likes</li>
      			</ul>
      		</div>
      		<div className="FeedItem__description">
      			<span className="FeedItem__username">{post.author.username}</span>
      			<p>{post.description}</p>
      		</div>
          <CommentContainer {...post}/>
      		<CommentForm {...post} source="feed" />
      	</div>
      </article>
    );
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(FeedItem);
