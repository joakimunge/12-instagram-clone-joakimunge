import React, {Component} from 'react';
import './Button.css';

class Button extends Component {

	render() {
		const {text, appearance, type} = this.props;
		return (
			<button type={type} className={`button button-${appearance}`}>{text}</button>
		)	
	}
}

export default Button;