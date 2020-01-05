import React, { useState, useEffect } from 'react';
import './App.scss';
import Scoreboard from './Scoreboard.jsx';

const GROUP_NUMBER = 70532;

function App() {
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const dataByUser = data ? data.response.user : {};
  
  const fetchData = () => {
    return fetch(`http://playoffchallengebackend.herokuapp.com/api/?group=${GROUP_NUMBER}`)
      .then(response => response.json());
  }
  
  useEffect(() => {
    fetchData().then(data => {
      setData(data);
      setLoading(false);
    })}, []);
  
  const userData = [];
  for (const user in dataByUser) {
    userData.push({ username: user, roster: dataByUser[user] });
  }
  return (
    <div className="App">
     <div>NFL Playoff Challenge</div>
     {loading ? 'Loading....' : <Scoreboard userData={userData}/>}
    </div>
  );
}

export default App;
