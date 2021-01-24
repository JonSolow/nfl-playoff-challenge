import React, { useState, useEffect, useRef } from 'react';
import get from 'lodash/get';
import fromUnixTime from 'date-fns/fromUnixTime';
import format from 'date-fns/format';
import './App.css';
import Header from './Header';
import Scoreboard from './Scoreboard';

const CURRENT_WEEK = 3;
const ONE_MINUTE = 60000;

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
	const [userData, setUserData] = useState();
	const [stats, setStats] = useState();
	const [lastUpdatedTime, setLastUpdatedTime] = useState();

	const fetchData = () => {
		return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/?group=${process.env.REACT_APP_GROUP_ID}`)
			.then(response => response.json())
			.then(data => {
				setUserData(get(data, ['response', 'users'], ''));
				setStats(get(data, ['response', 'week_stats'], ''));
				setLastUpdatedTime(format(fromUnixTime(get(data, 'timestamp')), 'p'));
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	useInterval(() => {
		fetchData();
	}, ONE_MINUTE);

	return (
		<>
			<Header selectedWeek={selectedWeek} setSelectedWeek={setSelectedWeek} lastUpdatedTime={lastUpdatedTime} />
			{loading ? (
				<div className="loading">Loading...</div>
			) : (
				<Scoreboard
					selectedWeek={selectedWeek}
					weekUserData={get(userData, `${selectedWeek}`)}
					gameStats={get(stats, [`${selectedWeek}`, 'team_games'], {})}
					playerStats={get(stats, [`${selectedWeek}`, 'stats'], {})}
				/>
			)}
		</>
	);
}

export default App;
