import React, { useContext } from 'react';
import classNames from 'classnames';
import get from 'lodash/get';
import { StatsContext } from './Scoreboard';
import './Player.scss';

function Player(props) {
  const { name, img, position, team, score, multiplier, isTotal } = props;
  const { weekStats } = useContext(StatsContext);
  const playerClasses = classNames('player', { [`player--${team}`]: !!team });
  const multiplierClasses = classNames('player__multiplier', { [`player__multiplier--${multiplier}`]: !!multiplier });

  const gameData = get(weekStats, ['team_games', `${team}`], {});
  const homeScore = get(gameData, 'homeScore', '');
  const awayScore = get(gameData, 'awayScore', '');
  const homeTeam = get(gameData, 'homeTeamId', '');
  const awayTeam = get(gameData, 'awayTeamId', '');
  const clock = get(gameData, 'clock', '');
  const quarter = get(gameData, 'quarter', '');
  const status = get(gameData, 'status', '');
  const isActive = status === "active_game";
  const isPostGame = status === "post_game";
  const gameOver = status === 'game_closed';
  const gameWinner = homeScore > awayScore ? homeTeam : awayTeam;
  const teamStatus = gameOver ? `${team}` === gameWinner ? "Win" : "Loss" : "";
  const teamScore = `${team}` === homeTeam ? homeScore : awayScore;
  const oppScore = `${team}` === homeTeam ? awayScore : homeScore;
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
        {isActive && `Q${quarter} ${clock}, ${displayScores}`}
        {isPostGame && `Q4 0:00, ${displayScores}`}
        {gameOver && `${teamStatus}, ${displayScores}`}
        {name !== ' ' && !team && !isTotal && 'Bye'}
      </span>
    </li>
  );
}

export default Player;