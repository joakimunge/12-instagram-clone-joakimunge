import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Like.css';

import {
  createLike
} from '../../actions';

class Like extends Component {
	 constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUpdate() {
    if (this.props.toggle) {
      return true;
    }
  }

  handleClick(e) {
  	let like = {
  		postId: this.props._id
  	}
  	console.log(like)
  	this.props.dispatch(createLike(like))
  }

	render() {
		return <li onClick={this.handleClick} className="App-Like"><i className="far fa-heart"></i></li>; 
	}
}

const mapStateToProps = state => ({
	toggle: false
})

export default connect(mapStateToProps)(Like);
