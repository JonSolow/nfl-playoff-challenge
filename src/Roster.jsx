import React from 'react';
import Player from './Player';
import './Roster.scss';

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

function Roster({ weekData }) {
  const weeklyRoster = weekData.roster;
  return (
    <ul className="roster">
      {weeklyRoster.map(player => {
        const { roster_slot, player_name, position, team, score, multiplier } = player;
        return <Player
          key={roster_slot}
          name={player_name}
          position={ROSTER_SLOT_POSITIONS[roster_slot]}
          team={team}
          score={score}
          multiplier={multiplier}
        />
      })}
    </ul>
  );
}

export default Roster;