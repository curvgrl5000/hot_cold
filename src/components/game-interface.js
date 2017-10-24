import React from 'react';
import Counter from './counter';
import Guesses from './guesses';
import GuessInput from './guess-input';
import FaqsButton from './faqs-button';
import Hints from './hints';
import Reset from './reset';

export default class GameInterface extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			guess: '',
			hints: "Guess my Number",   		// the hints for each guess
			counter: 0, 		// Keeps track of how many guesses
			guesses:[],
			isToggled: true,
			resetApp: true
		}
		this.displayHints = this.displayHints.bind(this);
	}

	addNum(guess) {
      this.setState({
          guess
      });
      console.log(guess);
      this.setState((prevState, props) =>({
      	counter: prevState.counter + 1,
      }));
      this.setState(prevState => ({
      	guesses: [...prevState.guesses, {val:guess}]
      }));
  }
  
	displayHints(hints){
		this.setState({
			hints: hints
		});
	}

	render(){
		const checkGuess = [{ 
			val: this.state.guesses
		}];

		return(
			<div className="container">
				<FaqsButton onClick={this.onClick} letsToggle={this.state.isToggled ? '+FAQS' : 'CLOSE'}/>
				<Reset onClick={this.onClick} resetApp={this.state.resetApp ? ' + RESET' : 'HIDE'}/>
				
				<div className="main scale-up-center">
					<div className="app_title">
						<h1>HOT <span>or</span> COLD</h1>
					</div>
					<Hints value={this.state.hints} onChange={this.displayHints.bind(this)} />
					<GuessInput onAdd={guess => this.addNum(guess)} />
					<Counter
						id="count"
						label="count"
						value={this.state.counter} />
						<Guesses value={this.state.guesses} />
				</div>
			</div>
		)
	}
}
