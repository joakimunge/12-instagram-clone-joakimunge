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

	componentWillReceiveProps(nextProps) {
		if (nextProps !== this.props) {
			return true;
		}
	}

	render() {
		let {photos} = this.props;
		let row = [];
		let photoRows = [];

		if (photos.length > 0) {
			photos.map((photo, i)=> {
				if (i % 3 === 0 || i === 0) {
					row = [];
					photoRows.push(row);
				}
				row.push(photo)
			})
		}

		if (this.props.isFetching) {
    	return <Loader />;
		}

		return(
			<section className="App-PhotoGrid">
			{
				photoRows.map((row, i) => {
					return(
					<div key={i} style={styles} className="App-PhotoGrid__row">
						{ row.map((photo) => <GridItem key={photo.id} {...photo} />) }
					</div>
					)
				})
			}
			</section>
		)
	}

}

const mapStateToProps = state => ({
	photos: state.root.photos,
	isFetching: state.root.isFetching
})

export default connect(mapStateToProps)(PhotoGrid);