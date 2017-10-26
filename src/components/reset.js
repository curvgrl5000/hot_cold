import React from 'react';

export default function Reset(props){
	return (
		<button className="info" onClick={props.onClick}>{props.text}</button>
	)
}