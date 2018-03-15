import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Like, Comment, CommentForm, CommentContainer } from '../';

import './PhotoModal.css';
import PropTypes from 'prop-types';

class PhotoModal extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {

  }

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="Modal__backdrop">
        <span onClick={this.props.onClose} className="Modal__close"><i className="fas fa-times"></i></span>
        <div className="Modal">
          <div className="PhotoModal__image">
            <img src={this.props.image} alt={this.props.description} />
          </div>
          <div className="PhotoModal__content">
            <div className="PhotoModal__user">
              <Avatar />
              <Link to="#"><span className="PhotoModal__username">{this.props.author}</span></Link>
            </div>
            <div className="FeedItem__social">
          <div className="FeedItem__interactions">
            <ul>
              <li><i className="far fa-heart"></i></li>
              <li><i className="far fa-comment"></i></li>
              <li>{this.props.likes.length} Likes</li>
            </ul>
          </div>
          <div className="FeedItem__description">
            <span className="FeedItem__username">{this.props.author}</span>
            <p>{this.props.description}</p>
          </div>
          <CommentContainer {...this.props}/>
          <CommentForm {...this.props} />
        </div>
          </div>
        </div>
      </div>
    );
  }
}

PhotoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default PhotoModal;