import React, {Component} from 'react';

class ErrorMessage extends Component {

	constructor(props) {
		super(props)
	}

	render() {		
		return (
			<section className="Not">
				<h2 className="App-error">{this.props.message}</h2>
			</section>
		)
	}
}

export default ErrorMessage;