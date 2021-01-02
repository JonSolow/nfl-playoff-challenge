import React from 'react';
import './Button.scss'

function Button(props) {
  const { name, number, disabled, selected, setSelectedWeek } = props;
  return (
    <button
      className={`button button--selected-${selected}`}
      onClick={() => { setSelectedWeek(number); window.scrollTo(0, 0) }}
      disabled={disabled}
    >
      {name}
    </button>
  )
}

export default Button;