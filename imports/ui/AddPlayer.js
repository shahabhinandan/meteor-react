import React from 'react';
import { Players } from './../api/players';

const handleSubmit = (e) => {

};

export default class AddPlayer extends React.Component {
	handleSubmit(e){
		e.preventDefault();
		let playerName = e.target.playerName.value; // Target value by *name*
		// debugger;
		if(playerName){
			console.log("Adding player:", playerName);
			e.target.playerName.value = '';
			Players.insert({
				name: playerName,
				score: 1
			});
		};
	}
	render() {
		return (
			<div className="item">
				<form className="form" onSubmit={this.handleSubmit.bind(this)}>
					<input className="form__input" type="text" name="playerName" placeholder="Player Name"/>
					<button className="button">Add Player</button>
				</form>
			</div>
		)
	}
}