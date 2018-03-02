import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FeedItem } from '../components';

import {
	fetchPhotos
} from '../actions';


class PhotoFeed extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(fetchPhotos());
	}

	render() {
		// console.log(this.props);
		const {photos} = this.props;
		return (
			<section className="App-PhotoFeed">
				{
					photos.map(photo => (
						<FeedItem key={photo.id} photo={photo} />
					))
				}
			</section>
		)
	}
}

const mapStateToProps = state => ({
	photos: state.photos
})

// export default PhotoFeed;
export default connect(mapStateToProps)(PhotoFeed);