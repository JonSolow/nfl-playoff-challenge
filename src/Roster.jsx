import React from 'react';
import Player from './Player';
import './Roster.scss';

const ROSTER_SLOT_POSITIONS = {
  1: 'QB',
  2: 'RB',
  3: 'RB',
  4: 'WR',
  5: 'WR',
  6: 'TE',
  7: 'K',
  8: 'DEF',
};

const MISSING_TEAMS_FOR_PLAYERS = {
  'Mark Ingram': 'BAL',
  'Marquise Brown': 'BAL',
  'Mark Andrews': 'BAL',
  'Lamar Jackson': 'BAL',
  'Travis Kelce': 'KC',
  'Baltimore Ravens': 'BAL',
  'Raheem Mostert': 'SF',
  'Tyreek Hill': 'SF',
  'Damien Williams': 'KC',
  'Harrison Butker': 'KC',
  'Deebo Samuel': 'SF',
  'George Kittle': 'SF',
  'San Francisco 49ers': 'SF',
  'Justin Tucker': 'BAL',
  'Aaron Jones': 'GB',
  'Davante Adams': 'GB',
  'Robbie Gould': 'SF',
  'Jimmy Garoppolo': 'SF',
  'Emmanuel Sanders': 'SF',
}

function Roster({ roster }) {
  roster.sort((a,b) => {
    return parseInt(a.roster_slot) > parseInt(b.roster_slot)
      ? 1 : -1
  });
  return (
    <ul className="roster">
      {roster.map(player => {
        const { roster_slot, player_name, img_url, team, score, multiplier } = player;
        let teamName = team;
        let playerName = player_name;
        if (player_name !== ' ' && team === 'None') {
          teamName = MISSING_TEAMS_FOR_PLAYERS[player_name];
        }
        if (player_name === 'San Francisco 49ers') {
          playerName = 'San Fran. 49s';
        }
        return <Player
          key={roster_slot}
          name={playerName}
          img={img_url}
          position={ROSTER_SLOT_POSITIONS[roster_slot]}
          team={teamName}
          score={score}
          multiplier={multiplier}
        />
      })}
    </ul>
  );
}

export default Roster;