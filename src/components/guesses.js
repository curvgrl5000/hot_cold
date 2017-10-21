import React from 'react';

export default function Guesses(props){
	return (
		<div className="user_guesses">
		 <button className="tiny_guess">{props.value}</button>
	)
}
