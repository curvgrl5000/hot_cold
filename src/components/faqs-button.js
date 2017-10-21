import React from 'react';

export default function Faqs(props){
	return (
		<button className="info" onClick={props.onClick}>{props.letsToggle}</button>
	)
}