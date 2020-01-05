import React from 'react';

function Player(props) {
  const { name, position, team, score } = props;
  return (
    <li className="player">
      Name: {name}
      Position: {position}
      Team: {team}
      Score: {score}
    </li>
  );
}

export default Player;