
import * as React from 'react';
import { PlayerList } from '@smenjefo/smenjefo-ui';

import { PlayerTurnStatus } from '../../../../application/dto/IPlayerDTO';

export interface IPlayerAvatarProps {
  turnStatus: PlayerTurnStatus;
};

const PlayerAvatarTurnStatus = (props: IPlayerAvatarProps) => {
  return (
    <PlayerList.PlayerAvatarTurnStatus
      theme={
        props.turnStatus === 'completed'
          ? 'completed'
          : 'in-progress'
      }
    />
  );
};

export default PlayerAvatarTurnStatus;