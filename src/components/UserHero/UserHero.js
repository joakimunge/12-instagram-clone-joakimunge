import React, {Component} from 'react';
import './UserHero.css';

class UserHero extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {user} = this.props;

		if (!user) {
			return null;
		}

		return (
			<section className="UserHero">
				<div className="Avatar--huge">
					<img src={user.avatar} width="148px" alt="avatar"/>
				</div>
				<div className="UserHero__info">
					<h3>{user.username}</h3>
					<p>{user.description}</p>
				</div>
			</section>
		)
	}
}

export default UserHero;