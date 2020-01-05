import React from 'react';
import Player from './Player';
import './Roster.scss';

function Roster({ weekData }) {
  const weeklyRoster = weekData.roster;
  return (
    <ul className="roster">
      {weeklyRoster.map(player => {
        const { roster_slot, player_name, position, team, score } = player;
        return <Player
          key={roster_slot}
          name={player_name}
          position={position}
          team={team}
          score={score}
        />
      })}
    </ul>
  );
}

export default Roster;