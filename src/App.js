import React, { useState, useEffect } from 'react';
import './App.scss';
import Scoreboard from './Scoreboard.jsx';
// import data from './playoffchallengedata.json';

const GROUP_NUMBER = 70532;

function App() {

  // const dataByUser = data.response.user;
  // const loading = false;
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const dataByUser = data ? data.response.users : {};
  
  const fetchData = () => {
    return fetch(`http://playoffchallengebackend.herokuapp.com/api/?group=${GROUP_NUMBER}`)
      .then(response => response.json());
  }
  console.log('dataByUser', dataByUser);
  useEffect(() => {
    fetchData().then(data => {
      setData(data);
      setLoading(false);
    })}, []);

  return (
    <>
      <div className="header">
        <div className="header__wrapper">
          <div className="header__title">NFL Playoff Challenge</div>
        </div>
      </div>
     {loading ? 'Loading....' : <Scoreboard dataByUser={dataByUser}/>}
    </>
  );
}

export default App;
