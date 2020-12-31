import React, { useState, useEffect, useRef } from 'react';
import './App.scss'
import Header from './Header';
import Scoreboard from './Scoreboard';

const GROUP_NUMBER = 70532;
const CURRENT_WEEK = 18;
const TWO_MINUTES = 120000;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function App() {
  
  const [loading, setLoading] = useState(true);
  const [weekToDisplay, setWeekToDisplay] = useState(CURRENT_WEEK);
  const [data, setData] = useState();
  const dataByUser = data ? data.response.users : {};

  const fetchData = () => {
    return fetch(`https://playoffchallengebackend.herokuapp.com/api/?group=${GROUP_NUMBER}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  useInterval(() => {
    fetchData();
  }, TWO_MINUTES);

  return (
    <>
      <Header weekToDisplay={weekToDisplay} setWeekToDisplay={setWeekToDisplay}/>
      {
        loading
          ? <div className='loading'><div className="loading__text">Loading...</div></div>
          : <Scoreboard dataByUser={dataByUser} weekToDisplay={weekToDisplay}/>
      }
    </>
  );
}

export default App;
