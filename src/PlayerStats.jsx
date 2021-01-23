import React from 'react';
import get from 'lodash/get';
import './PlayerStats.css';

const STATMAPPING = {
    'DefINT': 'INT',
    'DefTD': 'TD',
    'DefFum': 'FUM'
}

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
                    statKey={get(STATMAPPING, `${statKey}`, statKey)}
                    statValue={statValue}
                ></RenderStat>
            })}
      </div>
    );
}

export default PlayerStats;
