import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '../';

import './PhotoModal.css';
import PropTypes from 'prop-types';

class PhotoModal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="Modal__backdrop">
        <div className="Modal">
          <div className="PhotoModal__image">
            <img src="https://s-media-cache-ak0.pinimg.com/736x/29/06/49/29064960c2b0e3b0ab3fa1e9005ee971--jackson-wyoming-jackson-hole.jpg" alt="Modal Image" />
          </div>
          <div className="PhotoModal__content">
            <div className="PhotoModal__user">
              <Avatar />
              <Link to="#"><span className="PhotoModal__username">joakimunge</span></Link>
            </div>
            <div className="FeedItem__social">
          <div className="FeedItem__interactions">
            <ul>
              <li><i className="far fa-heart"></i></li>
              <li><i className="far fa-comment"></i></li>
              <li>25 Likes</li>
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