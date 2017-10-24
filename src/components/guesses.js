import React from 'react';

export default function Guesses(props){

	const all_guesses = props.value.map((num, index) => (
		<li> 
		<button className="tiny_guess" key={index}>
			{num.val}
		</button>
		</li>
		));

	return (
		<ul className="user_guesses">
			{all_guesses}
		</ul>
	)
}
