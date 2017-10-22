import React from 'react';

export default function Counter(props){
	return (
		<div className="counting">
			<h3 id={props.id}>You've Guessed: <span>{props.value}</span> Times</h3>
		</div>
	)
}

Counter.defaultProps = {
    value: 0
};