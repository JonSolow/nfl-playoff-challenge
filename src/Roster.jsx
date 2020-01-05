import React from 'react';
import Player from './Player';

const WEEK_NUMBER = 18;

function Roster({ roster }) {
  const rosterByWeek = roster[WEEK_NUMBER];
  return (
    <ul className="roster">
      Roster:
      {rosterByWeek.map(player => {
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