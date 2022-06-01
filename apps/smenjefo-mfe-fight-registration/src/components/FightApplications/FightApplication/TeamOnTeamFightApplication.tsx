import IFightApplicationProps from './IFightApplicationProps';
import TeamOnTeamHeaderRow from './HeaderRow/TeamOnTeamHeaderRow';
import TeamOnTeamPlayersRow from './PlayersRow/TeamOnTeamPlayersRow';
import TeamOnTeamJoinButtonsRow from './JoinButtonsRow/TeamOnTeamJoinButtonsRow';
import FightApplication from './FightApplication';
import LeftButtonsRow from './LeftButtonsRow/LeftButtonsRow';
import DeclineButtonsRow from './DeclineButtonsRow/DeclineButtonsRow';

const tableStyle = {
  width: '90vw',
};

const TeamOnTeamFightApplication = (props: IFightApplicationProps) => {
  return (
    <FightApplication
      style={tableStyle}
      fightApplication={props.fightApplication}
      header={TeamOnTeamHeaderRow}
      players={TeamOnTeamPlayersRow}
      joinButtons={TeamOnTeamJoinButtonsRow}
      leftButtons={LeftButtonsRow}
      declineButtons={DeclineButtonsRow}
    />
  );
};

export default TeamOnTeamFightApplication;