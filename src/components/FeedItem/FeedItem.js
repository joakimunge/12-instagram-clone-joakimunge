import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '../'
import './FeedItem.css';

class FeedItem extends Component {

  render() {
    const {photo} = this.props;
    return (
      <article className="FeedItem">
      	<div className="FeedItem__user">
      		<Avatar />
      		<Link to="#"><span className="FeedItem__username">joakimunge</span></Link>
      	</div>
      	<div className="FeedItem__image">
      		<img src={photo.imageUrl} alt="Feeditem" />
      	</div>
      	<div className="FeedItem__social">
      		<div className="FeedItem__interactions">
      			<ul>
      				<li><i className="far fa-heart"></i></li>
      				<li><i className="far fa-comment"></i></li>
      				<li>{photo.likes} Likes</li>
      			</ul>
      		</div>
      		<div className="FeedItem__description">
      			<span className="FeedItem__username">joakimunge</span>
      			<p>Vi tipsar om hur du kan skapa egna inbjudningskort med flytande bläck i nya magasinet Sisters in law. @sistersinlaw.se </p>
      		</div>
      		<div className="FeedItem__comments">
      			<div className="FeedItem__comment">
      				<span className="FeedItem__username">axelolsson</span>
      				<p className="FeedItem__comment__body">Fyfarao vad fint!</p>
      			</div>
      		</div>
      		<div className="FeedItem__addcomment">
      			<input type="text" name="comment" placeholder="Say something nice!"/>
      		</div>
      	</div>
      </article>
    );
  }
}

export default FeedItem;
