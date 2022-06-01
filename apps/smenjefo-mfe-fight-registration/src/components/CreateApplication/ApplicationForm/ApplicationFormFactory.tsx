import { useMemo } from "react";
import { FightType } from "../../../slices/fightTypeSlice";

import AllVersusAllApplicationForm from "./AllVersusAllApplicationForm";
import DuelApplicationForm from "./DuelApplicationForm";
import IApplicationFormProps from "./IApplicationFormProps";
import TeamOnTeamApplicationForm from "./TeamOnTeamApplicationForm";

interface IApplicationFormFactoryProps extends IApplicationFormProps {
  fightType: FightType;
}

const ApplicationFormFactory = (props: IApplicationFormFactoryProps) => {
  const Component = useMemo(() => {
    if (props.fightType === 'teamOnTeam') {
      return (
        <TeamOnTeamApplicationForm
          onSubmit={props.onSubmit}
          onDecline={props.onDecline}
        />
      );
    }
  
    if (props.fightType === 'duel') {
      return (
        <DuelApplicationForm
          onSubmit={props.onSubmit}
          onDecline={props.onDecline}
        />
      );
    }
  
    if (props.fightType === 'allVersusAll') {
      return (
        <AllVersusAllApplicationForm
          onSubmit={props.onSubmit}
          onDecline={props.onDecline}
        />
      );
    }
  
    return null;
  }, [props.fightType, props.onSubmit, props.onDecline]);

  return Component;
}

export default ApplicationFormFactory;