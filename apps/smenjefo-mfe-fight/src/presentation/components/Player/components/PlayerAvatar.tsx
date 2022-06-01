
import * as React from 'react';
import { PlayerList, Image } from '@smenjefo/smenjefo-ui';

import { PlayerTurnStatus, PlayerStatus } from '../../../../application/dto/IPlayerDTO';

import PlayerAvatarTurnStatus from './PlayerAvatarTurnStatus';

export interface IPlayerAvatarProps {
  avatarURL: string;
  turnStatus: PlayerTurnStatus;
  status: PlayerStatus;
};

const PlayerAvatar = (props: IPlayerAvatarProps) => {
  return (
    <PlayerList.PlayerAvatar>
      {
        props.status === 'inGame'
          ? (
            <PlayerAvatarTurnStatus
              turnStatus={props.turnStatus}
            />
          )
          : null
      }

      <Image
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        src={`${_STATIC_SERVER_URL_}/${props.avatarURL}`}
        alt="Avatar"
        width="100%"
        height="auto"
      />
    </PlayerList.PlayerAvatar>
  );
};

export default PlayerAvatar;