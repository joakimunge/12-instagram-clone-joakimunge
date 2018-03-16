import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../aperture.svg';
import explore from '../../binoculars.svg';
import userIcon from '../../user.svg';
import notification from '../../notification.svg';
import photo from '../../photo.svg';

class Usernav extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App-header__navigation">
				<ul>
					<li><Link to="/upload"><img src={photo} className="App-explore" alt="upload" width="36px"/></Link></li>
					<li><Link to="/explore"><img src={explore} className="App-explore" alt="explore" width="36px"/></Link></li>
					<li><img src={notification} className="App-notification" alt="notifications" width="36px"/></li>
					<li><Link to={`/users/${this.props.username}`}><img src={userIcon} className="App-user" alt="my profile" width="36px"/></Link></li>
				</ul>
			</div>
		)
	}
}

export default Usernav;
