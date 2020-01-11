import React from 'react';
import './Player.scss';

function Player(props) {
  const { name, position, team, score, multiplier } = props;
  const multiplierClasses=`player__multiplier player__multiplier--${multiplier}`;
  return (
    <li className="player">
      <div className="player__data">
        <div className="player__position">
          {position}
        </div>
        <div className="player__info">
          {name !== ' ' ? (
            <>
              <div className="player__name">
                {name}
              </div>
              <div className="player__team">
                {team}
              </div>
            </>
          ) : null}
        </div>
        <div className="player__score-info">
          <span className={multiplierClasses}>
            {multiplier}X BONUS
          </span>
          <span className="player__score">
            {score}
          </span>
        </div>
      </div>
    </li>
  );
}

export default Player;