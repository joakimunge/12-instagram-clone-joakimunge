import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridItem, Loader } from '../components';

import {
	fetchPosts
} from '../actions';


const styles = { display: 'flex'};

class PhotoGrid extends Component {

	componentDidMount() {
		this.props.dispatch(fetchPosts());
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps !== this.props) {
			return true;
		}
	}

	render() {
		let {posts} = this.props;
		let row = [];
		let postRows = [];

		if (posts.length > 0) {
			posts.map((post, i) => {
				if (i % 3 === 0 || i === 0) {
					row = [];
					postRows.push(row);
				}
				return row.push(post)
			})
		}

		if (this.props.isFetching) {
    	return <Loader />;
		}

		return(
			<section className="App-PhotoGrid">
			{
				postRows.map((row, key) => {
					return(
					<div key={key} style={styles} className="App-PhotoGrid__row">
						{ row.map((post) => <GridItem key={post._id} {...post} />) }
					</div>
					)
				})
			}
			</section>
		)
	}

}

const mapStateToProps = state => ({
	posts: state.posts.posts,
	isFetching: state.posts.isFetching
})

export default connect(mapStateToProps)(PhotoGrid);