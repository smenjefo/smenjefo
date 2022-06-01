import * as React from 'react';
import { PlayerList as PlayerListUI } from '@smenjefo/smenjefo-ui';
import IPlayerDTO from '../../../application/dto/IPlayerDTO';

import Player from '../Player/Player';

interface IPlayerListProps {
  players: IPlayerDTO[];
  userPlayerId: string;
};

const PlayerList = (props: IPlayerListProps) => {
  return (
    <PlayerListUI.Index>
      {props.players.map((player) => {
        return (
          <Player
            key={player.id}
            id={player.id}
            entityId={player.entityId}
            nickname={player.nickname}
            avatarURL={player.avatarURL}
            role={player.role}
            hp={player.hp}
            energy={player.energy}
            team={player.team}
            status={player.status}
            turnStatus={player.turnStatus}
            isUserPlayerId={props.userPlayerId === player.id}
          />
        );
      })}
    </PlayerListUI.Index>
  )
};

export default PlayerList;