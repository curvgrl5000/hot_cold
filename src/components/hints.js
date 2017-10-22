import React from 'react';

export default function Hints(props){
	return(
			<div className="hints">
				<h2 onChange={e => props.onChange(e.currentTarget)} htmlFor="guessing">{props.value}</h2>
			</div>
	);
}