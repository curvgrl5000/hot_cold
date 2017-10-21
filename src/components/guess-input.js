import React from 'react';

export default function SearchForm(props){
	return(
		<form className="top_form" onSubmit={event => event.preventDefault()}>
			<label htmlFor="guessing">Take A Guess</label>&emsp;
			<input type="text" id="num" name="num" size='30'
			placeholder="Input a Number" 
			value={props.key} />
			<button onSubmit={event => props.onSubmit(event.target.value)}>Submit Your Guess</button>
		</form>
	);
}