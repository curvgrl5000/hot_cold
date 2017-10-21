import React from 'react';

export default function SearchForm(props){
	return(
		<form className="top_form" onSubmit={event => event.preventDefault()}>
			<label htmlFor="guessing">Take A Guess</label>&emsp;
			<input type="number" id="num" name="num" size='3'
			placeholder="Choose a Number" 
			onChange={event => props.onChange(event.target.value)}
			value={props.key}/>
		</form>
	);
}