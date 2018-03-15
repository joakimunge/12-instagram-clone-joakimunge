import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FeedItem, Loader } from '../components';

import {
	fetchPosts
} from '../actions';


class PhotoFeed extends Component {

	componentDidMount() {
		this.props.dispatch(fetchPosts());
	}

	render() {
		const {posts, isFetching} = this.props;

		if (isFetching) {
			return <Loader />
		}

		return (
			<section className="App-PhotoFeed">
				{ 
					posts.map(post => <FeedItem key={post._id} post={post} /> )
				}
			</section>
		)
	}
}

const mapStateToProps = state => ({
	posts: state.posts.posts,
	isFetching: state.posts.isFetching
})

export default connect(mapStateToProps)(PhotoFeed);