import React from 'react';
import './Player.scss';

function Player(props) {
  const { name, img, position, team, score, multiplier } = props;
  const playerClasses = `player player--${team}`
  const multiplierClasses = `player__multiplier player__multiplier--${multiplier}`;
  return (
    <li className={playerClasses}>
      {/* <div className="player__data"> */}
      <div className="player__position">
        {position}
      </div>
      <div className="player__image">
        <img className="player__img" src={img} alt={name} />
      </div>
      <div className="player__info">
        <div className="player__name">
          {/* {name} */}
        Player name
      </div>
        <div className="player__team">
          {/* {team} */}
        Team name
      </div>
      </div>
      {/* <div className="player__score-info"> */}
      <span className="player__score">
        {/* {score} */}
        500
      </span>
      <span className={multiplierClasses}>
        {/* {multiplier}X */}
        2X
      </span>
      {/* </div> */}
      {/* </div> */}
    </li>
  );
}

export default Player;