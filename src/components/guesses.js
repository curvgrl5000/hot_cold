import React from 'react';

export default function Guesses(props){
	return (
		<li>
		 <button className="tiny_guess">{props.value}</button>
		</li>
	)
}
