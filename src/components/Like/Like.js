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

  handleClick(e) {
  	let like = {
  		postId: this.props._id
  	}
  	this.props.dispatch(createLike(like))
  }

	render() {
		return <li onClick={this.handleClick} className="App-Like"><i className="far fa-heart"></i></li>;
	}
}

const mapStateToProps = state => ({
	toggle: state.like.toggle
})

export default connect(mapStateToProps)(Like);
