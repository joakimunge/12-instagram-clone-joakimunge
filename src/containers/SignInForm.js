import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FeedItem, Loader } from '../components';

import {
	loginUser
} from '../actions';

class SignInForm extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {email: '', password: ''}
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.dispatch(loginUser(this.state));
	}

	handleChange(e) {
		const target = e.target
		const name = target.name;
		this.setState({
			[name]: e.target.value
		});
	}

	componentWillUpdate() {
		if (this.props.isAuthenticated) {
			return true;
		}
	}

	render() {
		const {isFetching, isAuthenticated} = this.props;
		if (isAuthenticated) {
			return <Redirect to="/" />
		}

		return(
			<section className="App-signin">
				<h2 className="App-signin">This is sign in</h2>
				<form onSubmit={this.handleSubmit}>
					<label>E-mail</label>
					<input id="email" value={this.state.email} onChange={this.handleChange} type="text" name="email" placeholder="E-mail" />

					<label>Password</label>
					<input id="password" value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="E-mail" />
					<button type="submit">SUBMIT</button>
				</form>
			</section>
		)
	}
}

const mapStateToProps = state => ({
	isFetching: state.auth.isFetching,
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(SignInForm);