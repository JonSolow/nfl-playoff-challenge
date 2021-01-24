import React from 'react';
import Player from './Player';

const ROSTER_SLOT_POSITIONS = {
	1: 'QB',
	2: 'RB',
	3: 'RB',
	4: 'WR',
	5: 'WR',
	6: 'TE',
	7: 'K',
	8: 'DEF',
};

function Roster({ roster, isTotal, gameStats, playerStats }) {
	roster.sort((a, b) => {
		return parseInt(a.roster_slot) > parseInt(b.roster_slot) ? 1 : -1;
	});
	return (
		<ul className="user__roster">
			{roster.map(player => {
				const { roster_slot, player_name, img_url, team, score, multiplier, player_id } = player;
				let playerName = player_name;
				if (player_name === 'San Francisco 49ers') {
					playerName = 'San Fran. 49s';
				}
				if (player_name === 'Clyde Edwards-Helaire') {
					playerName = 'C. Edwards-Helaire';
				}
				return (
					<Player
						key={roster_slot}
						name={playerName}
						img={img_url}
						position={ROSTER_SLOT_POSITIONS[roster_slot]}
						team={team}
						score={score}
						multiplier={multiplier}
						isTotal={isTotal}
						teamGameStats={gameStats[`${team}`]}
						playerStats={playerStats[`${player_id}`]}
					/>
				);
			})}
		</ul>
	);
}

export default Roster;
