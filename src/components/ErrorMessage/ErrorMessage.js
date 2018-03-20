import React, {Component} from 'react';

class ErrorMessage extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<React.Fragment>
				<section className="Not">
				{ this.props.message
					?
					<h2 className="App-error">{this.props.message}</h2>
					:
					<h2 className="App-error">Seems to be nothing here :(</h2>
				}
				</section>
			</React.Fragment>
		)
	}
}

export default ErrorMessage;