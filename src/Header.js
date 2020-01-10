import React from 'react';
import './Header.scss';
import Button from './Button';

const WEEKS = [
  {
    name: 'Wild Card',
    number: 18,
    disabled: false,
  },
  {
    name: 'Divisional',
    number: 19,
    disabled: false,
  },
  {
    name: 'Conference',
    number: 20,
    disabled: true,
  },
  {
    name: 'Super Bowl',
    number: 22,
    disabled: true,
  },
  {
    name: 'TOTAL',
    number: 'total',
    disabled: false,
  },
];

function Header(props) {
  const { weekToDisplay, setWeekToDisplay } = props;
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
                selected={weekToDisplay === number}
                setWeekToDisplay={setWeekToDisplay}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
