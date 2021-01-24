import React from 'react';
import get from 'lodash/get';
import './PlayerStats.css';

const STATMAPPING = {
	DefINT: 'INT',
	DefTD: 'TD',
	DefFum: 'FUM',
	PtsAllow: 'Pts',
	'FG 0-49': '<50',
	'FG 50+': '50+',
};

function RenderStat(props) {
	const { statKey, statValue } = props;
	return (
		<li className="stat">
			<div className="stat__key">{statKey}</div>
			<div className="stat__value">{statValue}</div>
		</li>
	);
}

function PlayerStats(props) {
	const { playerStats } = props;
	const statArray = Object.entries(playerStats).slice(0, 4);

	return (
		<ul className="player-stats">
			{statArray.map(statPair => {
				const [statKey, statValue] = statPair;
				return <RenderStat key={statKey} statKey={get(STATMAPPING, `${statKey}`, statKey)} statValue={statValue} />;
			})}
		</ul>
	);
}

export default PlayerStats;
