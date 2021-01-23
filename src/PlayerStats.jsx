import React from 'react';
// import classNames from 'classnames';
import get from 'lodash/get';

import './PlayerStats.css';

function RenderStat(props) {
    const { statKey, statValue = {} } = props;
    if (statValue === '') {
        return (null);
    }
    return <li className="stats"> {statKey}: {statValue} </li>;
}

function PlayerStats(props) {
    const { playerStats } = props;
    const statArray = Object.entries(playerStats)

    return (
        <div>
            {statArray.map(statPair => {
                const [statKey, statValue] = statPair;
                return <RenderStat
                    statKey={statKey}
                    statValue={statValue}
                ></RenderStat>
            })}
      </div>
    );
}

export default PlayerStats;
