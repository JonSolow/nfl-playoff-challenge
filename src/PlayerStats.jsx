import React from 'react';
import get from 'lodash/get';
import './PlayerStats.css';

const STATMAPPING = {
	DefINT: 'INT',
	DefTD: 'TD',
	DefFum: 'FUM',
};

function RenderStat(props) {
	const { statKey, statValue } = props;
	return (
		statValue !== '' && (
			<span className="stats">
				{' '}
				{statKey}: {statValue}{' '}
			</span>
		)
	);
}

function PlayerStats(props) {
	const { playerStats } = props;
	const statArray = Object.entries(playerStats);

	return (
		<div>
			{statArray.map(statPair => {
				const [statKey, statValue] = statPair;
				return <RenderStat statKey={get(STATMAPPING, `${statKey}`, statKey)} statValue={statValue} />;
			})}
		</div>
	);
}

export default PlayerStats;
