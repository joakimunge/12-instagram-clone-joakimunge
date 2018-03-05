import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FeedItem, Loader } from '../components';

import {
	fetchPhotos
} from '../actions';


class PhotoFeed extends Component {

	componentDidMount() {
		this.props.dispatch(fetchPhotos());
	}

	render() {
		const {photos} = this.props;
		return (
			<section className="App-PhotoFeed">
				{ !this.props.isFetching 
					?
					photos.map(photo => (
							<FeedItem key={photo.id} photo={photo} />
					))
					:
					<Loader />
				}
			</section>
		)
	}
}

const mapStateToProps = state => ({
	photos: state.photos,
	isFetching: state.isFetching
})

export default connect(mapStateToProps)(PhotoFeed);