import { useMemo } from 'react';
import { FightType } from "../../../slices/fightTypeSlice";

import AllVersusAllHeader from "./AllVersusAllHeader";
import DuelHeader from "./DuelHeader";
import TeamOnTeamHeader from "./TeamOnTeamHeader";

interface IHeaderFactoryProps {
  fightType: FightType;
}

const HeaderFactory = (props: IHeaderFactoryProps) => {
  const Component = useMemo(() => {
    if (props.fightType === 'teamOnTeam') {
      return (
        <TeamOnTeamHeader />
      );
    }
  
    if (props.fightType === 'duel') {
      return (
        <DuelHeader />
      );
    }
  
    if (props.fightType === 'allVersusAll') {
      return (
        <AllVersusAllHeader />
      );
    }
  
    return null;
  }, [props.fightType]);
  
  
  return Component;
}

export default HeaderFactory;