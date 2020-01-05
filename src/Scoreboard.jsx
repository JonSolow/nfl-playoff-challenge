import React from 'react';
import User from './User';

function Scoreboard({ userData }) {

  return (
    <ol className="scoreboard">
      Scoreboard
      {userData.map(user => {
        const { username, roster } = user;
        return <User key={username} username={username} roster={roster}/>
      })}
    </ol>
  );
}

export default Scoreboard;