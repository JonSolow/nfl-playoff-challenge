import React from 'react';
import './Button.scss'

function Button(props) {
  const { name, number, disabled, setWeekToDisplay } = props;
  return (
    <button onClick={() => setWeekToDisplay(number)} disabled={disabled}>
      {name}
    </button>
  )
}

export default Button;