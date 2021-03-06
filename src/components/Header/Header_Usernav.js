import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown } from '../';

import explore from '../../binoculars.svg';
import userIcon from '../../user.svg';
import notification from '../../notification.svg';
import photo from '../../photo.svg';

class Usernav extends Component {

	constructor(props) {
		super(props);
		this.state = { isOpen: false }
	}

	toggleDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

	render() {
		return (
			<div className="App-header__navigation">
				<ul className="App-header__navigation__list">
					<li><Link to="/upload"><img src={photo} className="App-explore" alt="upload" width="36px"/></Link></li>
					<li><Link to="/explore"><img src={explore} className="App-explore" alt="explore" width="36px"/></Link></li>
					<li><img src={notification} className="App-notification" alt="notifications" width="36px"/></li>
					<li onClick={this.toggleDropdown} ><img src={userIcon} className="App-user" alt="my profile" width="36px"/>
						<Dropdown show={this.state.isOpen}
		          onClose={this.toggleModal}>
		        </Dropdown>
					</li>
				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Usernav);
