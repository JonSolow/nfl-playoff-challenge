import React from 'react';
import User from './User';
import './Scoreboard.scss';

function Scoreboard({ dataByUser }) {

  return (
    <ol className="scoreboard">
      {dataByUser.map(userData => {
        const { user, total_score, ...rest } = userData;
        return <User key={user} username={user} totalScore={total_score} {...rest} />
      })}
    </ol>
  );
}

export default Scoreboard;