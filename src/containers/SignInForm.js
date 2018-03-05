import React, { Component } from 'react';

class SignInForm extends Component {

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

		const request = new Request('/auth/login', options);

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

export default SignInForm;