import { Mongo } from 'meteor/mongo';
import numeral from 'numeral';

export const Players = new Mongo.Collection('players'); // Constructor Fucntion

export const calculatePositionPlayers = (players) => {
	let rank = 1;
	return players.map((player, index) => {
		if (index !== 0 && (players[index - 1].score > player.score)){
			debugger;
			rank++;
		}

		return {
			...player,
			rank,
			position: numeral(rank).format('0o'),
		}
	})
};