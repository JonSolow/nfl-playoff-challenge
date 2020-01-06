import React from 'react';
import User from './User';
import './Scoreboard.scss';

function Scoreboard({ dataByUser }) {

  dataByUser.sort((a,b) => parseInt(a.total_score) < parseInt(b.total_score) ? 1 : -1);

  return (
    <ol className="scoreboard">
      {dataByUser.map((userData, i) => {
        const { user, total_score, ...rest } = userData;
        const place = i + 1;
        return <User key={user} username={user} totalScore={total_score} place={place} {...rest} />
      })}
    </ol>
  );
}

export default Scoreboard;