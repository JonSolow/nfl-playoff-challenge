import React from 'react';
import get from 'lodash/get';
import './PlayerStats.css';

const STATMAPPING = {
	DefINT: 'INT',
	DefTD: 'TD',
    DefFum: 'FUM',
    PtsAllow: 'Pts',
    'FG 0-49': 'FG <50'
};

function RenderStat(props) {
	const { statKey, statValue } = props;
	return (
		statValue !== '' && (
			<li className="stats">
				{' '}
				{statKey}<br></br> {statValue}{' '}
			</li>
		)
	);
}

function PlayerStats(props) {
	const { playerStats } = props;
	const statArray = Object.entries(playerStats);

	return (
		<ul className="statsList">
			{statArray.map(statPair => {
				const [statKey, statValue] = statPair;
				return <RenderStat statKey={get(STATMAPPING, `${statKey}`, statKey)} statValue={statValue} />;
			})}
		</ul>
	);
}

export default PlayerStats;
