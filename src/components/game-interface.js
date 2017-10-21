import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';
import Guesses from './components/guesses';
import GuessInput from './components/guess-input';
import Faqs from './components/faqs';
import Reset from './components/reset';

export default class GameInterface extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			counter: '',
			guess: '',
			last_guess: []
		}
	}

	render(){
		return(
			<div class="container">
				<Faqs />
				<Reset />
				<div class="main">
					<GuessInput />
					<Counter />
				</div>
				<div>
					<Guesses />
				</div>
			</div>
		)
	}
}