import React from 'react';
import { FeedItem, GridItem } from '../components';


const PhotoGrid = () => {

	const styles = { display: 'flex'};

	return (
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
	)
}

export default PhotoGrid;