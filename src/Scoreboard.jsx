import React from 'react';
import User from './User';
import './Scoreboard.css';

function Scoreboard(props) {
  const { selectedWeek, weekUserData = [], gameStats } = props;

  return (
    <ol className="scoreboard">
      {weekUserData.map((userData, i) => {
        const { roster, user, week_score } = userData;
        const place = i + 1;

        return (
          <User
            key={user}
            username={user}
            place={place}
            selectedWeek={selectedWeek}
            weekScore={week_score}
            roster={roster}
            gameStats={gameStats}
          />
        );
      })}
    </ol>
  );
}

export default Scoreboard;