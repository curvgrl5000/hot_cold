import React from 'react';

export default class ModalWindow extends React.Component {
    onClose(event) {
        event.preventDefault();
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        return (
            <div className="overlay" id="modal">
                <div className="content">
                    <h3>Guess My Number</h3>
                    <div>
                        <p>This is better than Tetris! Start with the following steps: </p>
                        <ul>
                            <li>1. A <strong>random secret number</strong> is chosen between 1 to 100.</li>
                            <li>2. You need to <strong>guess</strong> it with a set of clues left with each guess.</li>
                            <li>3. Each guess <strong>provides a strong hint</strong> on how close ("hot") or faroff ("cold") your guess is.</li>
                        </ul>
                        <p>Delight in Randon Numbers</p>
                        <a className="close" href="#" onClick={e => this.onClose(e)}>Get Going!</a>
                    </div>
                </div>
            </div>
        );
    }
}