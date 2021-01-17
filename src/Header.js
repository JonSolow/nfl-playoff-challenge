import React from 'react';
import classNames from 'classnames';
import './Header.scss';
import Button from './Button';

const WEEKS = [
  {
    name: 'Wild Card',
    number: 1,
    disabled: false,
  },
  {
    name: 'Divisional',
    number: 2,
    disabled: false,
  },
  {
    name: 'Conference',
    number: 3,
    disabled: false,
  },
  {
    name: 'Super Bowl',
    number: 4,
    disabled: false,
  },
  {
    name: 'TOTAL',
    number: 'total',
    disabled: false,
  },
];

function Header(props) {
  const { selectedWeek, setSelectedWeek, lastUpdatedTime } = props;

  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__title">
          NFL Playoff Challenge
        </div>
        <div className="header__buttons">
          {WEEKS.map(week => {
            const { name, number, disabled } = week;
            return (
              <Button
                key={name}
                name={name}
                number={number}
                disabled={disabled}
                selected={selectedWeek === number}
                setSelectedWeek={setSelectedWeek}
              />
            );
          })}
        </div>
        <div className={classNames('header__time', { 'header__time--visible': !!lastUpdatedTime })}>{`Last updated: ${lastUpdatedTime}`}</div>
      </div>
    </div>
  );
}

export default Header;
