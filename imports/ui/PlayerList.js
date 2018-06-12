import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player'
import FlipMove from 'react-flip-move';


export default class PlayerList extends React.Component {
	renderPlayer = (playerList) => {
		if(playerList.length === 0){
			return (
				<div className="item">
					<p className="item__message item__message--empty">Add some friends!</p>
				</div>
				)
		} else {
			return playerList.map(
				(player) =>	(<Player key={player._id} player={player}/>)
			)
		}
	};
	render() {
		return (
			<FlipMove maintainContainerHeight={true} appearAnimation='elevator'>
			{this.renderPlayer(this.props.players)}
			</FlipMove>
		)
	}
}

PlayerList.propTypes = {
	players: PropTypes.array.isRequired,
}