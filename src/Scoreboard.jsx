import React, { useMemo, createContext } from 'react';
import get from 'lodash/get';
import User from './User';
import './Scoreboard.scss';

export const StatsContext = createContext();

function StatsProvider(props) {

  const { weekStats, children } = props;

  const value = useMemo(() => ({
    weekStats,
  }), [weekStats])

  return <StatsContext.Provider value={value}>{children}</StatsContext.Provider>
}

function Scoreboard(props) {
  const { selectedWeek, weekUserData = [], weekStats = {} } = props;

  return (
    <ol className="scoreboard">
      {weekUserData.map((userData, i) => {
        const { roster, user, week_score } = userData;
        const place = i + 1;

        return (
          <StatsProvider key={user} weekStats={weekStats}>
            <User
              key={user}
              username={user}
              place={place}
              selectedWeek={selectedWeek}
              weekScore={week_score}
              roster={roster}
            />
          </StatsProvider>
        );
      })}
    </ol>
  );
}

export default Scoreboard;