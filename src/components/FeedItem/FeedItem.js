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
    this.state = props.photo;
  } 

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.state) {
      console.log(nextProps)
      this.setState(nextProps);
    }
  }

  render() {
    const {photo, isSubmitting} = this.props;
    console.log(this.state);
    return (
      <article className="FeedItem">
      	<div className="FeedItem__user">
      		<Avatar />
      		<Link to={`/users/${photo.author}`} ><span className="FeedItem__username">{photo.author}</span></Link>
      	</div>
      	<div className="FeedItem__image">
      		<img src={photo.image} alt="Feeditem" />
      	</div>
      	<div className="FeedItem__social">
      		<div className="FeedItem__interactions">
      			<ul>
      				<Like {...photo}/>
      				<li><i className="far fa-comment"></i></li>
      				<li>{photo.likes.length} Likes</li>
      			</ul>
      		</div>
      		<div className="FeedItem__description">
      			<span className="FeedItem__username">{photo.author}</span>
      			<p>{photo.description}</p>
      		</div>
          <CommentContainer {...photo}/>
      		<CommentForm {...photo} />
      	</div>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  isSubmitting: state.comment.isSubmitting
})

export default connect(mapStateToProps)(FeedItem);
