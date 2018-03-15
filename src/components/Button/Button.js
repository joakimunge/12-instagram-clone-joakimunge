import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {text, style, type} = this.props;
		return (
			<button type={type} className={`button button-${style}`}>{text}</button>
		)	
	}
}

export default Button;