
import * as React from 'react';
import { PlayerList } from '@smenjefo/smenjefo-ui';

import PlayerStatusEnergy from './PlayerStatusEnergy';
import PlayerStatusHP from './PlayerStatusHP';

export interface IPlayerStatusProps {
  hp: number;
  energy: number;
};

const PlayerStatus = (props: IPlayerStatusProps) => {
  return (
    <PlayerList.PlayerStatus>
      <PlayerStatusHP hp={props.hp} />
      <PlayerStatusEnergy energy={props.energy} />
    </PlayerList.PlayerStatus>
  );
};

export default PlayerStatus;