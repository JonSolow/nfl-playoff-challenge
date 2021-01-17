import React from 'react';
import classNames from 'classnames';
import './Player.css';

function Player(props) {
  const { name, img, position, team, score, multiplier, isTotal, teamGameStats = {} } = props;

  const playerClasses = classNames('player', { [`player--${team}`]: !!team });
  const multiplierClasses = classNames('player__multiplier', { [`player__multiplier--${multiplier}`]: !!multiplier });

  const { homeScore, awayScore, homeTeamId, awayTeamId, clock, quarter, status } = teamGameStats;

  const isPreGame = status === "pre_game";
  const isActive = status === "active_game";
  const isPostGame = status === "post_game";
  const gameOver = status === 'game_closed';

  const gameWinner = homeScore > awayScore ? homeTeamId : awayTeamId;
  const teamStatus = gameOver ? `${team}` === gameWinner ? "Win" : "Loss" : "";
  const teamScore = `${team}` === homeTeamId ? homeScore : awayScore;
  const oppScore = `${team}` === homeTeamId ? awayScore : homeScore;
  const displayScores = `${teamScore}-${oppScore}`

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
      <span className="player__game-stats">
        {(isActive || isPreGame) && `Q${quarter} ${clock}, ${displayScores}`}
        {isPostGame && `Q4 0:00, ${displayScores}`}
        {gameOver && `${teamStatus}, ${displayScores}`}
        {name !== ' ' && !team && !isTotal && 'Bye'}
      </span>
    </li>
  );
}

export default Player;