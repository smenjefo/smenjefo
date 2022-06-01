
import React, { useContext, useCallback } from 'react';
import { PlayerList } from '@smenjefo/smenjefo-ui';

import IPlayerDTO from '../../../application/dto/IPlayerDTO';
import servicesContext from "../Application/ApplicationServicesContext";

import PlayerAvatar from './components/PlayerAvatar';
import PlayerNameFactory from './components/PlayerName/PlayerNameFactory';
import PlayerRole from './components/PlayerRole';
import PlayerStatus from './components/PlayerStatus';

export interface IPlayerProps extends IPlayerDTO {
  isUserPlayerId: boolean;
}

const Player = (props: IPlayerProps) => {
  const services = useContext(servicesContext);

  const onPlayerClick = useCallback(() => {
    services.turnWindowService.openTurnWindow({
      turnTargetId: props.id,
    });
  }, [props.id, services.turnWindowService])

  return (
    <PlayerList.Player
      behavior={
        props.status === 'eliminated'
          ? 'eliminated'
          : 'in-game'
      }
      onClick={onPlayerClick}
    >
      <PlayerNameFactory
        nickname={props.nickname}
        playerType={
          props.isUserPlayerId
            ? 'user'
            : 'player'
        }
      />

      <PlayerAvatar
        avatarURL={props.avatarURL}
        turnStatus={props.turnStatus}
        status={props.status}
      />

      <PlayerRole
        role={props.role}
      />

      <PlayerStatus
        hp={props.hp}
        energy={props.energy}
      />
    </PlayerList.Player>
  );
};

export default Player;