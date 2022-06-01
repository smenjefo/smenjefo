import { useMemo } from "react";
import { FightType } from "../../../slices/fightTypeSlice";

import AllVersusAllCreateApplicationButton from "./AllVersusAllCreateApplicationButton";
import DuelCreateApplicationButton from "./DuelCreateApplicationButton";
import ICreateApplicationButtonProps from "./ICreateApplicationButtonProps";
import TeamOnTeamCreateApplicationButton from "./TeamOnTeamCreateApplicationButton";

interface ICreateApplicationButtonFactoryProps extends ICreateApplicationButtonProps {
  fightType: FightType;
}

const CreateApplicationButtonFactory = (props: ICreateApplicationButtonFactoryProps) => {
  const Component = useMemo(() => {
    if (props.fightType === 'teamOnTeam') {
      return (
        <TeamOnTeamCreateApplicationButton
          onClick={props.onClick}
        />
      );
    }
  
    if (props.fightType === 'duel') {
      return (
        <DuelCreateApplicationButton
          onClick={props.onClick}
        />
        );
    }
  
    if (props.fightType === 'allVersusAll') {
      return (
        <AllVersusAllCreateApplicationButton
          onClick={props.onClick}
        />
      );
    }
  
    return null;
  }, [props.fightType, props.onClick]);

  return Component;
}

export default CreateApplicationButtonFactory;