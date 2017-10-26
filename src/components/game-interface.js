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
			hints: 'Guess my Number', // the hints for each guess
			counter: 0, 		         // Keeps track of how many guesses
			guesses:[],  // this is the array of guesses
			isToggled: true,
			resetApp: "+Reset",
			//correctAnswer: Math.floor(Math.random()* 100) + 1
			correctAnswer: 23
		};
	}

	reset(){
		window.location.reload();
	}

	addNum(guess) {
      console.log(this.state.correctAnswer);
      
      this.setState((prevState, props) =>({
      	counter: prevState.counter + 1,
      }));
      
      this.setState(prevState => ({
      	guesses: [...prevState.guesses, {val:guess}]
      }));

			guess = parseInt(guess, 10);
			
			function between(x, min, max) {
	  		return x >= min && x <= max;
			}
	  	
	  	let hints;
		  if (between(guess, 1, 13)) {
		    hints = "You're living in an Eskimo";
		  }
		  if (between(guess, 14, 20)) {
		    hints = "You're getting warmer!";
		  }
		  if (between(guess, 21, 35)) {
		    hints = "You're scorching hot!";
		  }
		  if (between(guess, 36, 100)) {
		    hints = "Back to the ice-age!";
		  }
		  else if (guess === this.state.correctAnswer){
		  	hints = "Success!"
		  }
		  this.setState({
		  	hints
		  });
			  
		}

	render(){
		return(
			<div className="container">
				<div className="top_nav">
					<FaqsButton />
					<Reset onClick={this.reset} text={this.state.resetApp}/>
				</div>
				<div className="main scale-up-center">
					<div className="app_title">
						<h1>HOT <span>or</span> COLD</h1>
					</div>
					<Hints value={this.state.hints} />
					<GuessInput onAdd={(guess) => this.addNum(guess)}  />
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

