
import * as React from 'react';
import { PlayerList, Text } from '@smenjefo/smenjefo-ui';

export interface IPlayerNameProps {
  nickname: string;
};

const PlayerNameUser = (props: IPlayerNameProps) => {
  return (
    <PlayerList.PlayerName>
      <Text
        size="small"
        weight="bold"
        theme="primary"
      >
        {props.nickname}
      </Text>
    </PlayerList.PlayerName>
  );
};

export default PlayerNameUser;