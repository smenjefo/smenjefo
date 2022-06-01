import IFightApplicationProps from './IFightApplicationProps';
import DuelHeaderRow from './HeaderRow/DuelHeaderRow';
import DuelPlayersRow from './PlayersRow/DuelPlayersRow';
import DuelJoinButtonsRow from './JoinButtonsRow/DuelJoinButtonsRow';
import FightApplication from './FightApplication';
import LeftButtonsRow from './LeftButtonsRow/LeftButtonsRow';
import DeclineButtonsRow from './DeclineButtonsRow/DeclineButtonsRow';

const tableStyle = {
  width: '90vw',
};

const DuelFightApplication = (props: IFightApplicationProps) => {
  return (
    <FightApplication
      style={tableStyle}
      fightApplication={props.fightApplication}
      header={DuelHeaderRow}
      players={DuelPlayersRow}
      joinButtons={DuelJoinButtonsRow}
      leftButtons={LeftButtonsRow}
      declineButtons={DeclineButtonsRow}
    />
  );
};

export default DuelFightApplication;