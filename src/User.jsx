import React from 'react';
import Roster from './Roster';
import './User.scss'

const WEEK_NUMBER = 18;

function User(props) {
  const { username, totalScore, place } = props;
  const weekData = props[WEEK_NUMBER];
  return (
    <li className="user">
      <div className="user__user-data">
        <div className="user__user-info">
          <div className="user__username-and-place">
            <span className="user__place">{place}</span>
            <span className="user__username">{username}</span>
          </div>
          <div className="user__total-score">
            <span className="user__score-type">
              Wild Card:
            </span>
            <span className="user__score-number">
              {totalScore}
            </span>
          </div>
        </div>
        <Roster weekData={weekData} />
      </div>
    </li>
  );
}

export default User;