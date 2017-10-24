import React from 'react';

export default class SearchForm extends React.Component{
		constructor(props) {
			super(props);
			this.state = {
				guess: ''
			};
			this.handleChange = this.handleChange.bind(this);
			this.onSubmit = this.onSubmit.bind(this);
		}

		handleChange(event){
			this.setState({
        	guess: event.target.value
        });
		}

		onSubmit(event) {
        event.preventDefault();
        console.log(this.state.guess);
        this.setState({
        	guess: ""
        })
    }

		render() {
		return(
			<form className="guess_form" onSubmit={this.onSubmit}>
				<input type="number" 
				id="num" 
				name="num" 
				size='30'
				placeholder="Input Number" 
				value={this.state.guess}
				onChange={this.handleChange} />
				<button className="guessing" 
					type="submit">Guess
				</button>
			</form>
		);
	}
}

