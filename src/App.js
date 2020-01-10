import React, { useState, useEffect } from 'react';
import './App.scss'
import Header from './Header';
import Scoreboard from './Scoreboard';

const GROUP_NUMBER = 70532;
const CURRENT_WEEK = 18;

function App() {
  
  const [loading, setLoading] = useState(true);
  const [weekToDisplay, setWeekToDisplay] = useState(CURRENT_WEEK);
  const [data, setData] = useState();
  const dataByUser = data ? data.response.users : {};

  const fetchData = () => {
    return fetch(`http://playoffchallengebackend.herokuapp.com/api/?group=${GROUP_NUMBER}`)
      .then(response => response.json());
  }

  useEffect(() => {
    fetchData().then(data => {
      setData(data);
      setLoading(false);
    })}, []);

  return (
    <>
      <Header weekToDisplay={weekToDisplay} setWeekToDisplay={setWeekToDisplay}/>
      {
        loading
          ? <div className='loading'><div className="loading__text">Loading...</div></div>
          : <Scoreboard dataByUser={dataByUser} weekToDisplay={weekToDisplay} currentWeek={CURRENT_WEEK}/>
      }
    </>
  );
}

export default App;
