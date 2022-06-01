import { useSelector } from 'react-redux';
import { Table } from '@smenjefo/smenjefo-ui';

import { IFightApplication } from '../../../slices/fightApplicationsSlice';

import IHeaderRowProps from './HeaderRow/IHeaderRowProps';
import IPlayersRowProps from './PlayersRow/IPlayersRowProps';
import IJoinButtonsRowProps from './JoinButtonsRow/IJoinButtonsRowProps';
import ILeftButtonsRowProps from './LeftButtonsRow/ILeftButtonsRowProps';
import IDeclineButtonsRowProps from './DeclineButtonsRow/IDeclineButtonsRowProps';
import { selectProfile } from '../../../../src/selectors/profileSelectors';

interface IFightApplicationProps {
  style: Record<string, any>;
  fightApplication: IFightApplication;
  header: (props: IHeaderRowProps) => JSX.Element;
  players: (props: IPlayersRowProps) => JSX.Element;
  joinButtons: (props: IJoinButtonsRowProps) => JSX.Element;
  leftButtons: (props: ILeftButtonsRowProps) => JSX.Element;
  declineButtons: (props: IDeclineButtonsRowProps) => JSX.Element;
}

const FightApplicationTable = (props: IFightApplicationProps) => {
  const {
    header: Header,
    players: Players,
    joinButtons: JoinButtons,
    leftButtons: LeftButtons,
    declineButtons: DeclineButtons,
  } = props;

  const profile = useSelector(selectProfile);

  const isPlayerInTheGame = !!props.fightApplication.teams.find((team) => {
    return team.players.find((player) => {
      return player.entityId === profile.entityId;
    });
  });

  const isModeratorPlayer = props.fightApplication.ownerEntityId === profile.entityId;

  const isSimplePlayer = !isModeratorPlayer && isPlayerInTheGame;

  const isNotPlayer = !isPlayerInTheGame;

  return (
    <Table.Index
      style={props.style}
    >
      <Table.Head>
        <Header
          fightApplication={props.fightApplication}
        />
      </Table.Head>

      <Table.Body>
        <Players
          fightApplication={props.fightApplication}
        />

        {isModeratorPlayer && (
          <DeclineButtons
            fightApplication={props.fightApplication}
          />
        )}

        {isSimplePlayer && (
          <LeftButtons
            fightApplication={props.fightApplication}
          />
        )}

        {isNotPlayer && (
          <JoinButtons
            fightApplication={props.fightApplication}
          />
        )}
      </Table.Body>
    </Table.Index>
  );
};

export default FightApplicationTable;