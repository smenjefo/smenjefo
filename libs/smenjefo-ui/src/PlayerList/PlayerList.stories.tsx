import React, { JSXElementConstructor } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Index from './Index/Index';
import Player from './Player/Player';
import PlayerAvatar from './PlayerAvatar/PlayerAvatar';
import PlayerName from './PlayerName/PlayerName';
import PlayerRole from './PlayerRole/PlayerRole';
import PlayerStatus from './PlayerStatus/PlayerStatus';
import PlayerStatusCount from './PlayerStatusCount/PlayerStatusCount';
import PlayerAvatarTurnStatus from './PlayerAvatarTurnStatus/PlayerAvatarTurnStatus';

interface IStoryAdditionalProps {
  behavior: 'in-game' | 'eliminated';
  theme: 'in-progress' | 'completed';
}

export default {
  title: 'PlayerList',
  components: Index,
  argTypes: {
    behavior: {
      options: ['in-game', 'eliminated'],
      control: { type: 'radio' },
      defaultValue: 'in-game',
    },
    theme: {
      options: ['in-progress', 'completed'],
      control: { type: 'radio' },
      defaultValue: 'in-progress',
    },
  },
} as ComponentMeta<typeof Index & IStoryAdditionalProps>;

export const Default: ComponentStory<typeof Index & JSXElementConstructor<IStoryAdditionalProps>> = ({ theme, behavior, ...props }) => {
  return (
    <Index {...props}>
      <Player behavior={behavior}>
        <PlayerName>
          <span>
            nickname area
          </span>
        </PlayerName>

        <PlayerAvatar>
          <PlayerAvatarTurnStatus
            theme={theme}
          />

          <span>
            avatarURL area
          </span>
        </PlayerAvatar>

        <PlayerRole>
          <span>
            role area
          </span>
        </PlayerRole>

        <PlayerStatus>
          <PlayerStatusCount>
            <span>
              hp area
            </span>
          </PlayerStatusCount>

          <PlayerStatusCount>
            <span>
              energy area
            </span>
          </PlayerStatusCount>
        </PlayerStatus>
      </Player>
    </Index>
  );
};
