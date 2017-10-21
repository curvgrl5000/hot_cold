import React from 'react';

export default function Reset(props){
	return (
		<h3 className="info" onClick={props.onClick}>{props.resetApp}</h3>
	)
}