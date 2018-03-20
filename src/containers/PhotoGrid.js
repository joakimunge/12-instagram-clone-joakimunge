import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridItem, Loader } from '../components';

import {
	fetchUser
} from '../actions';


const styles = { display: 'flex'};

class PhotoGrid extends Component {

	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps !== this.props) {
			return true;
		}
	}

	render() {
		let {posts} = this.props;

		if (!posts || posts.length === 0) {
			return <h2 className="App-PhotoGrid__empty">This user hasn't posted anything yet :( </h2>
		}
		let row = [];
		let postRows = [];

		if (posts && posts.length > 0) {
			posts.map((post, i) => {
				if (i % 3 === 0 || i === 0) {
					row = [];
					postRows.push(row);
				}
				return row.push(post)
			})
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
	isFetching: state.user.isFetching
})

export default connect(mapStateToProps)(PhotoGrid);