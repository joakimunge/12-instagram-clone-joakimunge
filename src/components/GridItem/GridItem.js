import React, {Component} from 'react';
import './GridItem.css';

import { PhotoModal } from '../';


class GridItem extends Component {
	constructor() {
		super();
		this.state = { isOpen: false }
	}

	toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

	render() {
		const {photo} = this.props;	
		console.log(photo);
		return (
			<article className="App-PhotoGrid__item">
				<div className="App-PhotoGrid__image" onClick={this.toggleModal}>
					<img src="https://s-media-cache-ak0.pinimg.com/736x/29/06/49/29064960c2b0e3b0ab3fa1e9005ee971--jackson-wyoming-jackson-hole.jpg" alt="Griditem" />
				</div>
				<PhotoModal show={this.state.isOpen}
          onClose={this.toggleModal}>
        </PhotoModal>
			</article>
		)
	}
}

export default GridItem;