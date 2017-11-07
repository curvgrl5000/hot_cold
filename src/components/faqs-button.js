import React from 'react';
import ModalWindow from './modal-window';

export default class Faqs extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
				showModal: false
			};
	}

	toggleModal() {
		this.setState({
			showModal: !this.state.showModal
		});
	}

	render() {
		let modalWindow;
		if (this.state.showModal) {
			modalWindow = <ModalWindow className="scale-down-center" onClose={() => this.toggleModal() } />;
		}

		return (
			<div>
				<button className="info left" onClick={ () => this.toggleModal() }>Faqs</button>
				{modalWindow}
			</div>
		);
	}
}