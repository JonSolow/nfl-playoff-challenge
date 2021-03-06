import React from 'react';
import Roster from './Roster';
import './User.css';

const WEEK_NAMES = {
	1: 'Wild Card',
	2: 'Divisional',
	3: 'Conference',
	4: 'Super Bowl',
	total: 'TOTAL',
};

function User(props) {
	const { username, place, selectedWeek, weekScore, roster, gameStats, playerStats } = props;
	return (
		<li className="user">
			<span className="user__place">{place}</span>
			<span className="user__username">{username}</span>
			<span className="user__score-type">{`${WEEK_NAMES[selectedWeek]}:`}</span>
			<span className="user__score-number">{weekScore}</span>
			<Roster roster={roster} isTotal={selectedWeek === 'total'} gameStats={gameStats} playerStats={playerStats} />
		</li>
	);
}

export default User;
