import IFightApplicationProps from './IFightApplicationProps';
import AllVersusAllHeaderRow from './HeaderRow/AllVersusAllHeaderRow';
import AllVersusAllPlayersRow from './PlayersRow/AllVersusAllPlayersRow';
import AllVersusAllJoinButtonsRow from './JoinButtonsRow/AllVersusAllJoinButtonsRow';
import FightApplication from './FightApplication';
import LeftButtonsRow from './LeftButtonsRow/LeftButtonsRow';
import DeclineButtonsRow from './DeclineButtonsRow/DeclineButtonsRow';

const tableStyle = {
  width: '90vw',
};

const AllVersusAllFightApplication = (props: IFightApplicationProps) => {
  return (
    <FightApplication
      style={tableStyle}
      fightApplication={props.fightApplication}
      header={AllVersusAllHeaderRow}
      players={AllVersusAllPlayersRow}
      joinButtons={AllVersusAllJoinButtonsRow}
      leftButtons={LeftButtonsRow}
      declineButtons={DeclineButtonsRow}
    />
  );
};

export default AllVersusAllFightApplication;