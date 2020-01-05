import React from 'react';
import Roster from './Roster';
import './User.scss'

const WEEK_NUMBER = 18;

function User(props) {
  const { username, totalScore} = props;
  const weekData = props[WEEK_NUMBER];
  return (
    <li className="user">
      <div className="user__user-data">
        <div className="user__user-info">
          <div className="user__username">{username}</div>
          <div className="user__total-score">Total Score: {totalScore}</div>
        </div>
        <Roster weekData={weekData} />
      </div>
    </li>
  );
}

export default User;