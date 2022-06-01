
import * as React from 'react';
import { PlayerList, Image, Text } from '@smenjefo/smenjefo-ui';

export interface IPlayerStatusHPProps {
  hp: number;
};

const PlayerStatusHP = (props: IPlayerStatusHPProps) => {
  return (
    <>
      <Image
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        src={`${_STATIC_SERVER_URL_}/images/heart.svg`}
        alt="Health Points"
        width={14}
        height={14}
      />

      <PlayerList.PlayerStatusCount>
        <Text size="small">
          {props.hp}
        </Text>
      </PlayerList.PlayerStatusCount>
    </>
  );
};

export default PlayerStatusHP;