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
}

function Roster({ weekData }) {
  const weeklyRoster = weekData.roster;
  return (
    <ul className="roster">
      {weeklyRoster.map(player => {
        const { roster_slot, player_name, team, score, multiplier } = player;
        let teamName = team;
        if (player_name !== ' ' && team === 'None') {
          teamName = MISSING_TEAMS_FOR_PLAYERS[player_name];
        }
        return <Player
          key={roster_slot}
          name={player_name}
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