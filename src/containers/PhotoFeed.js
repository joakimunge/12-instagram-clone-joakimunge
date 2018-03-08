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
		const {photos, isFetching} = this.props;

		if (isFetching) {
			return <Loader />
		}

		return (
			<section className="App-PhotoFeed">
				{ 
					photos.map(photo => <FeedItem key={photo._id} photo={photo} /> )
				}
			</section>
		)
	}
}

const mapStateToProps = state => ({
	photos: state.root.photos,
	isFetching: state.root.isFetching
})

export default connect(mapStateToProps)(PhotoFeed);