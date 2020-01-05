import React from 'react';
import './Player.scss';

function Player(props) {
  const { name, position, team, score } = props;
  return (
    <li className="player">
      <div className="player__data">
        <div className="player__position">
          {position}
        </div>
        <div className="player__info">
          <div className="player__name">
            {name}
          </div>
          <div className="player__team">
            {team}
          </div>
        </div>
        <div className="player__score">
          {score}
        </div>
      </div>
    </li>
  );
}

export default Player;