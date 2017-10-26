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
			resetApp: "+New Game",
			correctAnswer: Math.floor(Math.random()* 100) + 1
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
			if (isNaN(guess)){
	  		this.setState({
	  			hints: "Input a Number to Play!"
	  		});
	  		return;
	  	}
			
			const checker = Math.abs(guess - this.state.correctAnswer);
	  	
	  	let hints;
	  	
		  if (checker >= 50) {
		    hints = "You're living in an Eskimo!";
		  }
		  else if (checker >= 30) {
		    hints = "You're still cold!";
		  }
		  else if (checker >= 10) {
		    hints = "You're getting warm";
		  }
		  else if (checker >= 1) {
		    hints = "You're pretty hot!";
		  }
		  else if (guess === this.state.correctAnswer) {
		  	hints = 'Success!! \nStart A New Game!';
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

