import React, { useState, useEffect, useRef } from 'react';
import get from 'lodash/get';
import './App.css'
import Header from './Header';
import Scoreboard from './Scoreboard';
import sampleData from './sample-data.json';

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
    // const [data, setData] = useState();

    // const fetchData = () => {
    //   return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/?group=${process.env.REACT_APP_GROUP_ID}`)
    //     .then(response => response.json())
    //     .then(data => {
    //       setData(get(data, ['response', 'users'], ''));
    //       setLoading(false);
    //     });
    // }

    // useEffect(() => {
    //   fetchData();
    // }, []);

    // useInterval(() => {
    //   fetchData();
    // }, TWO_MINUTES);
    const data = get(sampleData, ['response', 'users'], '');
    console.log('data', data);
    const weekData = get(data, `${selectedWeek}`);
    return (
        <>
            <Header selectedWeek={selectedWeek} setSelectedWeek={setSelectedWeek} />
            <Scoreboard selectedWeek={selectedWeek} weekData={weekData} />
            {/* {
        loading
          ? <div className='loading'>Loading...</div>
          : <Scoreboard selectedWeek={selectedWeek} weekData={weekData} />
      } */}
        </>
    );
}

export default App;
