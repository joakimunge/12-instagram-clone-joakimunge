import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
	return (
		<span className="Avatar Avatar--small">
			<img src={props.url} alt="avatar avatar--small" width="36px" />
		</span>
	)
}

export default Avatar;