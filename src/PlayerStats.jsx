import React from 'react';
// import classNames from 'classnames';
import get from 'lodash/get';

import './PlayerStats.css';

function RenderStat(props) {
    const { statName, statVal = {} } = props;
    if (statVal === '') {
        return (null);
    }
    return <li className="stats"> {statName}: {statVal} </li>;
}

function PlayerStats(props) {
  const { playerStats, position = {} } = props;
  const pTD = get(playerStats, 'PTD', '')
  const pYd = get(playerStats, 'PYd', '')
  const pInt = get(playerStats, 'INT', '')
  const ruTD = get(playerStats, 'RuTD', '')
  const ruYd = get(playerStats, 'RuYd', '')
  const reTD = get(playerStats, 'ReTD', '')
  const reYd = get(playerStats, 'ReYd', '')
  const fumble = get(playerStats, 'Fum', '')
  const sack = get(playerStats, 'Sack', '')
  const defInt = get(playerStats, 'DefINT', '')
  const defFum = get(playerStats, 'DefFum', '')
  const defTD = get(playerStats, 'DefTD', '')
  const ptsAllow = get(playerStats, 'PtsAllow', '')
  const fG049 = get(playerStats, 'FG 0-49', '')
  const fG50p = get(playerStats, 'FG 50+', '')
  const pAT = get(playerStats, 'PAT', '')

  return (
    <li>
      <span>
        <RenderStat
            statName='PYd'
            statVal={pYd}
        ></RenderStat>
        <RenderStat
            statName='PTD'
            statVal={pTD}
        ></RenderStat>
        <RenderStat
            statName='Int'
            statVal={pInt}
        ></RenderStat>
        <RenderStat
            statName='RuYd'
            statVal={ruYd}
        ></RenderStat>
        <RenderStat
            statName='RuTD'
            statVal={ruTD}
        ></RenderStat>
        <RenderStat
            statName='ReYd'
            statVal={reYd}
        ></RenderStat>
        <RenderStat
            statName='ReTD'
            statVal={reTD}
        ></RenderStat>
        <RenderStat
            statName='Fum'
            statVal={fumble}
        ></RenderStat>
        <RenderStat
            statName='Sack'
            statVal={sack}
        ></RenderStat>
        <RenderStat
            statName='Int'
            statVal={defInt}
        ></RenderStat>
        <RenderStat
            statName='Fum'
            statVal={defFum}
        ></RenderStat>
        <RenderStat
            statName='TD'
            statVal={defTD}
        ></RenderStat>
        <RenderStat
            statName='PtsAllow'
            statVal={ptsAllow}
        ></RenderStat>
        <RenderStat
            statName='FG 0-49'
            statVal={fG049}
        ></RenderStat>
        <RenderStat
            statName='FG 50+'
            statVal={fG50p}
        ></RenderStat>
        <RenderStat
            statName='PAT'
            statVal={pAT}
        ></RenderStat>
      </span>
    </li>
  );
}

export default PlayerStats;
