import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
	renderSub(){
		if(this.props.subtitle){
				return <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>;
		}
	}
	render() {
		return (
				<div className="title-bar">
					<div className="wrapper">
					<h1>{this.props.title}</h1>
					{this.renderSub()}
					</div>
				</div>
			);
	}
}

// https://reactjs.org/docs/typechecking-with-proptypes.html

TitleBar.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
}

TitleBar.defaultProps = {
	// title: 'Score Keepers',
}