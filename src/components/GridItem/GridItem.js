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
		const post = this.props;	
		return (
			<article className="App-PhotoGrid__item">
				<div className="App-PhotoGrid__image" onClick={this.toggleModal}>
					<img src={post.image} alt="Griditem" />
				</div>
				<PhotoModal {...post} show={this.state.isOpen}
          onClose={this.toggleModal}>
        </PhotoModal>
			</article>
		)
	}
}

export default GridItem;