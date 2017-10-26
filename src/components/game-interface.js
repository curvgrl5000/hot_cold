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
			hints: "Guess my Number", // the hints for each guess
			counter: 0, 		         // Keeps track of how many guesses
			guesses:[],  // this is the array of guesses
			isToggled: true,
			resetApp: "+Reset"
		}
		this.displayHints = this.displayHints.bind(this);
	}

	reset(){
		window.location.reload();
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
		const checkGuess = function(guess) {

			function between(x, min, max) {
	  		return x >= min && x <= max;
			}

			function hints(num) {
		  	var message = '' ;
			  if (between(num, 1, 13)) {
			    message = "You're living in an Eskimo";
			  }
			  if (between(num, 14, 20)) {
			    message = "You're getting warmer!";
			  }
			  if (between(num, 21, 35)) {
			    message = "You're scorching hot!";
			  }
			  if (between(num, 36, 51)) {
			    message = "Back to the ice-age!";
			  }
			  return message;
			}
		}

		checkGuess(this.state.guess);
  
		return(
			<div className="container">
				<FaqsButton onClick={this.onClick} letsToggle={this.state.isToggled ? '+FAQS' : 'CLOSE'}/>
				<Reset onClick={this.reset} text={this.state.resetApp}/>
				
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
