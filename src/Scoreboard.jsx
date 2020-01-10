import React from 'react';
import User from './User';
import './Scoreboard.scss';

function Scoreboard(props) {
  const { dataByUser, weekToDisplay } = props;

  // need to change this to sort by the week's score if weekToDisplay is not total
  dataByUser.sort((a,b) => parseInt(a.total_score) < parseInt(b.total_score) ? 1 : -1);

  return (
    <ol className="scoreboard">
      {dataByUser.map((userData, i) => {
        const { user, total_score } = userData;
        const place = i + 1;

        const weekData = userData[weekToDisplay];

        return (
          <User
            key={user}
            username={user}
            place={place}
            totalScore={total_score}
            weekToDisplay={weekToDisplay}
            weekData={weekData}
          />
        );
      })}
    </ol>
  );
}

export default Scoreboard;