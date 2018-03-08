import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Avatar } from '../'
import './FeedItem.css';

import {
  createComment
} from '../../actions';

class FeedItem extends Component {

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
      postId: this.props.photo._id
    }

    this.props.dispatch(createComment(comment));
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
    const {photo} = this.props;
    console.log(photo)
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
      				<li><i className="far fa-heart"></i></li>
      				<li><i className="far fa-comment"></i></li>
      				<li>{photo.likes.length} Likes</li>
      			</ul>
      		</div>
      		<div className="FeedItem__description">
      			<span className="FeedItem__username">{photo.author}</span>
      			<p>{photo.description}</p>
      		</div>
      		<div className="FeedItem__comments">
      			<div className="FeedItem__comment">
      				<span className="FeedItem__username">axelolsson</span>
      				<p className="FeedItem__comment__body">Fyfarao vad fint!</p>
      			</div>
      		</div>
      		<div className="FeedItem__addcomment">
            <form onSubmit={this.handleSubmit}>
              <input id="body" type="text" value={this.state.body} onChange={this.handleChange} name="body" placeholder="Say something nice!"/>
            </form>
      		</div>
      	</div>
      </article>
    );
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(FeedItem);
