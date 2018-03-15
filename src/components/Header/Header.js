import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.css';
import { Button } from '../'
import { default as Usernav } from './Header_Usernav.js';
import { Search } from './Header_Search.js';
import logo from '../../aperture.svg';

class Header extends Component {



	render() {
		const {isAuthenticated, user} = this.props.auth;
		return (
			<header className="App-header">
				<nav className="App-header__nav">
					<div className="App-header__logo">
						<Link to="/">
							<img src={logo} className="App-logo" alt="logo" width="36px"/>
						</Link>
							<h3>Aperture</h3>
					</div>
					{
						isAuthenticated
						?
						<div className="App-header__usernav">
							<Search />
							<Usernav {...user}/>
						</div>
						:
						<div className="App-header__login">
							<Link to="/signup" ><Button link='/signup' text="Sign up" style="primary" /></Link>
							<Link to="/signin" ><Button link='/signin' text="Log in" style="secondary" /></Link>
						</div>
					}
				</nav>
			</header>
		)
	}
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Header);