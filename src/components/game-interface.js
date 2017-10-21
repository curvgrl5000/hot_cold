import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import Guesses from './guesses';
import GuessInput from './guess-input';
import FaqsButton from './faqs-button';
import Reset from './reset';

export default class GameInterface extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			counter: '',
			guess: '',
			last_guess: [],
			isToggled: true,
			resetApp: true
		}
	}

	update(guess){
		this.setState({
			guess: guess
		});
	}

	render(){
		return(
			<div className="container">
				<FaqsButton onClick={this.onClick} letsToggle={this.state.isToggled ? '+FAQS' : 'CLOSE'}/>
				<Reset onClick={this.onClick} resetApp={this.state.resetApp ? ' + RESET' : 'HIDE'}/>
				<div className="main">
					<h1>HOT or Cold</h1>
					<GuessInput />
					<Counter
						id="count"
						label="count"
						value={this.state.counter} />
				</div>
				<div>
					<Guesses value={this.state.last_guess} onChange={this.update.bind(this)} />
				</div>
			</div>
		)
	}
}