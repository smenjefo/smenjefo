import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Table, Button, Text } from '@smenjefo/smenjefo-ui';

import ILeftButtonsRowProps from './ILeftButtonsRowProps';
import LocalizationContext from '../../../Localization/LocalizationContext';
import ControllersContext from '../../../ControllersProvider/ControllersContext';
import { selectProfile } from '../../../../../src/selectors/profileSelectors';

const LeftButtonsRow = (props: ILeftButtonsRowProps) => {
  const { controllers } = useContext(ControllersContext);
  const { t } = useContext(LocalizationContext);

  const profile = useSelector(selectProfile);

  const team = props.fightApplication.teams.find((fightApplicationTeam) => {
    return fightApplicationTeam.players.find((playerFromTeam) => {
      return playerFromTeam.entityId === profile.entityId;
    });
  });

  const player = team.players.find((playerFromTeam) => {
    return playerFromTeam.entityId === profile.entityId;
  });

  const onLeft = () => {
    controllers.fightApplications.removePlayerFromFightApplication({
      fightApplicationId: props.fightApplication.id,
      teamId: team.id,
      playerId: player.id,
    });
  };

  return (
    <Table.Row>
      <Table.DataCell
        textAlign="center"
        border="unbordered"
        padding="small"
        colSpan={4}
      >
        <Button
          onClick={onLeft}
          theme="error"
          size="small"
        >
          <Text
            theme="error"
            weight="bold"
            type="decorated"
          >
            {t('fightRegistration.FIGHT_REGISTRATION_FIGHT_APPLICATION_TABLE_BUTTON_LEFT')}
          </Text>
        </Button>
      </Table.DataCell>
    </Table.Row>
  );
};

export default LeftButtonsRow;