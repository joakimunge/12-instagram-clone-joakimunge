import React, {Component} from 'react';
import { connect } from 'react-redux';
import { PhotoGrid } from '../../containers';
import { UserHero, Loader, ErrorMessage } from '../../components';

import {
	fetchUser
} from '../../actions';

import './Profile.css';

class Profile extends Component {

	componentWillMount() {
		const {match} = this.props;
		this.props.dispatch(fetchUser(match.params.username));
	}

	render() {
		const {user} = this.props;

		if (user.success === false) {
			return <ErrorMessage message="User not found" />
		}

		if (user.isFetching) {
			return <Loader />
		}

    return (
      <div className="App-Profile">
      	<UserHero {...user.user} />
      	<PhotoGrid {...user.user} />
      </div>
		)
	}
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Profile);