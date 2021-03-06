import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Loader, Button } from '../components';

import {
	createPost
} from '../actions';

class UploadForm extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {}
	}

	async handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		await this.props.dispatch(createPost(formData));
		this.props.history.push('/')
	}

	handleChange(e) {
		const target = e.target
		const name = target.name;
		this.setState({
			[name]: e.target.value
		});
	}

	render() {
		const {isSubmitting} = this.props;

		if (isSubmitting) {
			return <Loader />
		}

		return(
			<section className="App-signup form-wrapper">
				<h2 className="App-signup">Upload new post!</h2>
				<form className="form-control" onSubmit={this.handleSubmit} encType="multipart/form-data">
					<input name="mediapost" id="image" type="file" placeholder="Image" accept="image/*,video/*" capture="camera,camcorder" required />
					<textarea name="description" id="description" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Say something about your image.." style={{resize: 'none', height: '140px'}}/>
					<Button appearance="primary" text="Submit" type="submit" />
				</form>
			</section>
		)
	}
}

const mapStateToProps = state => ({
	isSubmitting: state.posts.isSubmitting
})

export default withRouter(connect(mapStateToProps)(UploadForm));