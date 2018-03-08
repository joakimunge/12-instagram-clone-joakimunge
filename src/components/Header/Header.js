import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../../aperture.svg';
import explore from '../../binoculars.svg';
import user from '../../user.svg';
import notification from '../../notification.svg';



const Header = () => {
	return (
		<header className="App-header">
			<nav className="App-header__nav">
				<div className="App-header__logo">
					<Link to="/">
						<img src={logo} className="App-logo" alt="logo" width="36px"/>
					</Link>
						<h3>Aperture</h3>
				</div>
				<div className="App-header__search">
					<input className="App-header__searchfield" placeholder="Search"/>
				</div>
				<div className="App-header__navigation">
					<ul>
						<li><Link to="/explore"><img src={explore} className="App-explore" alt="explore" width="36px"/></Link></li>
						<li><img src={notification} className="App-notification" alt="notifications" width="36px"/></li>
						<li><Link to="/users/manchildman"><img src={user} className="App-user" alt="my profile" width="36px"/></Link></li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header;