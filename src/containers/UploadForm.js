import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Loader, Button } from '../components';

import logo from '../aperture.svg';

class SignUpForm extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {email: '', password: ''}
	}

	handleSubmit(e) {
		e.preventDefault();
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		const options = {
			method: 'POST',
			headers,
			body: JSON.stringify(this.state)
		};

		const request = new Request('/auth/register', options);

		fetch(request)
			.then(res => res.json())
			.then(res => console.log(res));
	}

	handleChange(e) {
		const target = e.target
		const name = target.name;
		this.setState({
			[name]: e.target.value
		});
	}

	render() {
		return(
			<section className="App-signup form-wrapper">
				<h2 className="App-signup">Upload new post!</h2>
				<form className="form-control" onSubmit={this.handleSubmit} enctype="multipart/form-data">
					<input id="image" type="file" placeholder="Image" accept="image/*" />
					<input id="description" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Say something about your image.." />
					<Button style="primary" text="Submit" type="submit" />
				</form>
			</section>
		)
	}
}

export default SignUpForm;