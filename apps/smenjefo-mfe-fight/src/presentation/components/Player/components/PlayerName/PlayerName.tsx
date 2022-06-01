
import * as React from 'react';
import { PlayerList, Text } from '@smenjefo/smenjefo-ui';

export interface IPlayerNameProps {
  nickname: string;
};

const PlayerName = (props: IPlayerNameProps) => {
  return (
    <PlayerList.PlayerName>
      <Text
        size="small"
        weight="bold"
      >
        {props.nickname}
      </Text>
    </PlayerList.PlayerName>
  );
};

export default PlayerName;