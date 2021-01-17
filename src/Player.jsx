import React from 'react';
import classNames from 'classnames';
import './Player.scss';

function Player(props) {
  const { name, img, position, team, score, multiplier } = props;
  const playerClasses = classNames('player', { [`player--${team}`]: !!team });
  const multiplierClasses = classNames('player__multiplier', { [`player__multiplier--${multiplier}`]: !!multiplier });
  return (
    <li className={playerClasses}>
      <div className="player__position">
        {position}
      </div>
      <div className="player__image">
        <img className="player__img" src={img} alt={name} />
      </div>
      <div className="player__name">
        {name}
      </div>
      <div className="player__team">
        {team}
      </div>
      <span className="player__score">
        {score}
      </span>
      <span className={multiplierClasses}>
        {multiplier}X
      </span>
    </li>
  );
}

export default Player;