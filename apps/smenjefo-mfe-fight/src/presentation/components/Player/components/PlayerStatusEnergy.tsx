
import * as React from 'react';
import { PlayerList, Image, Text } from '@smenjefo/smenjefo-ui';

export interface IPlayerStatusEnergyProps {
  energy: number;
};

const PlayerStatusEnergy = (props: IPlayerStatusEnergyProps) => {
  return (
    <>
      <Image
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        src={`${_STATIC_SERVER_URL_}/images/leaf.svg`}
        alt="Energy"
        width={20}
        height={20}
      />

      <PlayerList.PlayerStatusCount>
        <Text size="small">
          {props.energy}
        </Text>
      </PlayerList.PlayerStatusCount>
    </>
  );
};

export default PlayerStatusEnergy;