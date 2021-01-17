import React, { useState, useEffect, useRef } from 'react';
import get from 'lodash/get';
import fromUnixTime from 'date-fns/fromUnixTime';
import format from 'date-fns/format';
import './App.scss'
import Header from './Header';
import Scoreboard from './Scoreboard';

const CURRENT_WEEK = 2;
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
  const [lastUpdatedTime, setLastUpdatedTime] = useState();

  const fetchData = () => {
    return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/?group=${process.env.REACT_APP_GROUP_ID}`)
      .then(response => response.json())
      .then(data => {
        setData(get(data, ['response', 'users'], ''));
        setLastUpdatedTime(format(fromUnixTime(get(data, 'timestamp')), 'p'));
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
      <Header selectedWeek={selectedWeek} setSelectedWeek={setSelectedWeek} lastUpdatedTime={lastUpdatedTime} />
      {
        loading
          ? <div className='loading'>Loading...</div>
          : <Scoreboard selectedWeek={selectedWeek} weekData={get(data, `${selectedWeek}`)} />
      }
    </>
  );
}

export default App;
