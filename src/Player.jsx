import React from 'react';
import classNames from 'classnames';
import PlayerStats from './PlayerStats';
import get from 'lodash/get';
import './Player.css';

const MISSING_TEAM_NAMES = {
  'Aaron Rodgers': 'GB',
  'Aaron Jones': 'GB',
  'Travis Kelce': 'KC',
  'Davante Adams': 'GB',
  'Robert Tonyan': 'GB',
  'Mason Crosby': 'GB',
  'Green Bay Packers': 'GB',
  'Patrick Mahomes': 'KC',
  'C. Edwards-Helaire': 'KC',
  'Tyreek Hill': 'KC',
  'Kansas City Chiefs': 'KC',
  'Harrison Butker': 'KC',
};

function Player(props) {
  const { name, img, position, team, score, multiplier, isTotal, teamGameStats = {}, playerStats = {} } = props;

  const playerClasses = classNames('player', { [`player--${team}`]: !!team });
  const multiplierClasses = classNames('player__multiplier', { [`player__multiplier--${multiplier}`]: !!multiplier });

  const { homeScore, awayScore, homeTeamId, awayTeamId, clock, quarter, status } = teamGameStats;

  const isBye = !team && name && name !== ' ';
  const isHalfTime = quarter === 'HALFTIME';
  const isPreGame = status === "pre_game";
  const isActive = status === "active_game";
  const isPostGame = status === "post_game";
  const gameOver = status === 'game_closed';

  const gameWinner = homeScore > awayScore ? homeTeamId : awayTeamId;
  const teamStatus = gameOver ? `${team}` === gameWinner ? "Win" : "Loss" : "";
  const teamScore = `${team}` === homeTeamId ? homeScore : awayScore;
  const oppScore = `${team}` === homeTeamId ? awayScore : homeScore;
  const displayScores = `${teamScore}-${oppScore}`;

  let teamName = team;
  if (isBye) {
    teamName = get(MISSING_TEAM_NAMES, `${name}`, '');
  }

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
        {teamName}
      </div>
      <span className="player__score">
        {score}
      </span>
      <span className={multiplierClasses}>
        {multiplier}X
      </span>
      <span className="player__game-status">
        {(isPreGame || isActive && !isHalfTime) && `Q${quarter} ${clock}`}
        {isHalfTime && 'Halftime'}
        {isPostGame && 'Q4 0:00'}
        {gameOver && `${teamStatus}`}
        {!isTotal && isBye && 'Bye'}
      </span>
      <span className="player__game-score">
        {(isPreGame || isActive || isPostGame || gameOver) && `${displayScores}`}
      </span>
      <div>
        <PlayerStats
            playerStats={playerStats}
          />
      </div>
    </li>
  );
}

export default Player;
