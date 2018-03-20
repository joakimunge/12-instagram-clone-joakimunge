import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '../components';

import {
	signupUser
} from '../actions';

class SignUpForm extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			name: '',
			username: '',
			email: '',
			password: ''
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.dispatch(signupUser(this.state));
	}

	handleChange(e) {
		const target = e.target
		const name = target.name;
		this.setState({
			[name]: e.target.value
		});
	}

	render() {

		const {isAuthenticated} = this.props;
		if (isAuthenticated) {
			return <Redirect to="/" />
		}

		return(
			<section className="App-signup form-wrapper">
				<h2 className="App-signup">Sign up!</h2>
				<form className="form-control" onSubmit={this.handleSubmit}>
					<input id="name" type="text" value={this.state.name} onChange={this.handleChange} name="name" placeholder="Name" required />
					<input id="username" type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Username" required />
					<input id="email" value={this.state.email} onChange={this.handleChange} type="text" name="email" placeholder="E-mail" required />
					<input id="password" value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Password" required />
					<Button appearance="primary" text="Submit" type="submit" />
				</form>
			</section>
		)
	}
}

const mapStateToProps = state => ({
	isFetching: state.auth.isFetching,
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(SignUpForm);