import React from 'react';

import { IFightApplication } from '../../slices/fightApplicationsSlice';
import { FightType } from '../../slices/fightTypeSlice';

import AllVersusAllFightApplication from './FightApplication/AllVersusAllFightApplication';
import DuelFightApplication from './FightApplication/DuelFightApplication';
import TeamOnTeamFightApplication from './FightApplication/TeamOnTeamFightApplication';

interface IFightApplicationFactoryProps {
  fightType: FightType;
  fightApplication: IFightApplication;
}

const FightApplicationFactory = (props: IFightApplicationFactoryProps) => {
  if (props.fightType === 'teamOnTeam') {
    return (
      <TeamOnTeamFightApplication
        fightApplication={props.fightApplication}
      />
    );
  }

  if (props.fightType === 'duel') {
    return (
      <DuelFightApplication
        fightApplication={props.fightApplication}
      />
    );
  }

  if (props.fightType === 'allVersusAll') {
    return (
      <AllVersusAllFightApplication
        fightApplication={props.fightApplication}
      />
    );
  }

  return null;
};

export default FightApplicationFactory;