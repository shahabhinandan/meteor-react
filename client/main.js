import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players, calculatePositionPlayers } from './../imports/api/players';
import { Tracker } from 'meteor/tracker'

import App from './../imports/ui/App';
// setTimeout(function () {
// 	console.log('Players List: ', Players.find().fetch())
// }, 1000); // Runs the command at a delay
// Tracker.autorun(function () {
// 	console.log('Players List: ', Players.find().fetch());
// });

Meteor.startup(() => {
	let player;
	Tracker.autorun( () => {
		players = Players.find({}, {sort: {score: -1, index: -1}}).fetch(); //https://docs.meteor.com/api/collections.html
		let positionedPlayers = calculatePositionPlayers(players);
		let title = "Score Keep";
		let subtitle = "Created by abhioxic"
		ReactDOM.render(<App title={title} subtitle={subtitle} players={positionedPlayers}/>, document.getElementById('app'));
	});
});