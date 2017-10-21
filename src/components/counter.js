import React from 'react';

export default function Counter(props){
	return (
		<h3 className="user_interface" id={props.id} label={props.label}>
		  Guess Count:<span>#{props.value}</span>
		</h3>
	)
}

Counter.defaultProps = {
    value: 0
};