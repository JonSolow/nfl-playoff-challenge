import React from 'react';
import User from './User';
import './Scoreboard.scss';

function Scoreboard(props) {
  const { selectedWeek, weekData } = props;

  return (
    <ol className="scoreboard">
      {weekData.map((userData, i) => {
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
          />
        );
      })}
    </ol>
  );
}

export default Scoreboard;