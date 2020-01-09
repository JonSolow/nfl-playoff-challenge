import React from 'react';
import Roster from './Roster';
import './User.scss'

const WEEK_NAMES = {
  18: 'Wild Card',
  19: 'Divisional',
  20: 'Conference',
  22: 'Super Bowl',
  total: 'TOTAL',
}

function User(props) {
  const { username, place, totalScore, weekToDisplay, weekData } = props;
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
              {`${WEEK_NAMES[weekToDisplay]}:`}
            </span>
            <span className="user__score-number">
              {weekToDisplay === 'total' ? totalScore : weekData.week_score}
            </span>
          </div>
        </div>
        <Roster weekData={weekData} />
      </div>
    </li>
  );
}

export default User;