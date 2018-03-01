import React from 'react';
import './GridItem.css';


const GridItem = () => {
	return (
		<article className="App-PhotoGrid__item">
			<div className="App-PhotoGrid__image">
				<img src="https://s-media-cache-ak0.pinimg.com/736x/29/06/49/29064960c2b0e3b0ab3fa1e9005ee971--jackson-wyoming-jackson-hole.jpg" alt="Feed Image" />
			</div>
		</article>
	)
}

export default GridItem;