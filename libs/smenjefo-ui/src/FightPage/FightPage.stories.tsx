import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Index from './Index/Index';
import Status from './Status/Status';
import Players from './Players/Players';
import StatusTurnNumber from './StatusTurnNumber/StatusTurnNumber';
import StatusHistory from './StatusHistory/StatusHistory';

export default {
  title: 'FightPage',
  component: Index,
} as ComponentMeta<typeof Index>;

export const Default: ComponentStory<typeof Index> = (props) => {
  return (
    <Index>
      <Players>
        <div>
          Players area
        </div>
      </Players>

      <Status>
        <StatusTurnNumber>
          <div>
            Status turn number area
          </div>
        </StatusTurnNumber>

        <StatusHistory>
          <div>
            Status history number area
          </div>
        </StatusHistory>
      </Status>

      <Players>
        <div>
          Players area
        </div>
      </Players>
    </Index>
  );
};
