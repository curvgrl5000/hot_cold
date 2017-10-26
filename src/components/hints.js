import React from 'react';

export default function Hints(props){
	return(
			<div className="hints">
				<h2 id="hints">{props.value}</h2>
			</div>
	);
}
