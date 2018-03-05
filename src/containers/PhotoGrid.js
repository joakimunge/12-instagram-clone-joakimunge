import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridItem, Loader } from '../components';

import {
	fetchPhotos
} from '../actions';


const styles = { display: 'flex'};

class PhotoGrid extends Component {

	componentDidMount() {
		this.props.dispatch(fetchPhotos());
	}

	render() {
		const {photos} = this.props;
		return(
					this.props.isFetching
					?
					<section className="App-PhotoGrid">
						<div style={styles} className="App-PhotoGrid__row">
							<GridItem />
							<GridItem />
							<GridItem />
						</div>
						<div style={styles} className="App-PhotoGrid__row">
							<GridItem />
							<GridItem />
							<GridItem />
						</div>
						<div style={styles} className="App-PhotoGrid__row">
							<GridItem />
							<GridItem />
							<GridItem />
						</div>
					</section>
					:
					<Loader />
		)
	}

}

const mapStateToProps = state => ({
	photos: state.photos
})

export default connect(mapStateToProps)(PhotoGrid);