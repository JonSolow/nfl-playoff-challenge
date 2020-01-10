import React from 'react';
import './Button.scss'

function Button(props) {
  const { name, number, disabled, selected, setWeekToDisplay } = props;
  return (
    <button
      className={`button--selected-${selected}`}
      onClick={() => {setWeekToDisplay(number); window.scrollTo(0, 0)}}
      disabled={disabled}
    >
      {name}
    </button>
  )
}

export default Button;