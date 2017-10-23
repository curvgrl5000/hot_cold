import React from 'react';

export default function SearchForm(props){
	return(
		<form className="top_form" onSubmit={event => event.preventDefault()}>
			<input type="text" id="num" name="num" size='30'
			placeholder="Input Number" 
			value={props.key} />
			<button className="guessing" onSubmit={event => props.onSubmit(event.target.value)}>Guess</button>
		</form>
	);
}