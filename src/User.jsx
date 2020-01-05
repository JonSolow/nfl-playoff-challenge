import React from 'react';
import Roster from './Roster';

function User({ username, roster }) {
  return (
    <li className="user">
     <div>User: {username}</div>
     <Roster roster={roster} />
    </li>
  );
}

export default User;