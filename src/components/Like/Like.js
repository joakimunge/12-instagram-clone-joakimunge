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
  		postId: this.props._id,
      userId: this.props.user._id
  	}
  	this.props.dispatch(createLike(like))
  }

	render() {
    const {toggle} = this.props;
    if (toggle) return <li onClick={this.handleClick} className="App-Like"><i className="far fa-heart"></i></li>;
		return <li onClick={this.handleClick} className="App-Like liked"><i className="fas fa-heart"></i></li>;
	}
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(Like);
