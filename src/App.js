import React, { useState, useEffect, useRef } from 'react';
import get from 'lodash/get';
import './App.scss'
import Header from './Header';
import Scoreboard from './Scoreboard';

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
  const [selectedWeek, setSelectedWeek] = useState(CURRENT_WEEK);
  const [data, setData] = useState();

  const fetchData = () => {
    return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/?group=${process.env.REACT_APP_GROUP_ID}`)
      .then(response => response.json())
      .then(data => {
        setData(get(data, ['response', 'users'], ''));
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  useInterval(() => {
    fetchData();
  }, TWO_MINUTES);

  const weekData = get(data, `${selectedWeek}`);
  return (
    <>
      <Header selectedWeek={selectedWeek} setSelectedWeek={setSelectedWeek}/>
      {
        loading
          ? <div className='loading'><div className="loading__text">Loading...</div></div>
          : <Scoreboard selectedWeek={selectedWeek} weekData={weekData}/>
      }
    </>
  );
}

export default App;
