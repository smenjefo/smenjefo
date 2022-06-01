import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Table, Button, Text } from '@smenjefo/smenjefo-ui';

import IJoinButtonsRowProps from './IJoinButtonsRowProps';
import LocalizationContext from '../../../Localization/LocalizationContext';
import ControllersContext from '../../../ControllersProvider/ControllersContext';
import { selectProfile } from '../../../../../src/selectors/profileSelectors';

const AllVersusAllJoinButtonsRow = (props: IJoinButtonsRowProps) => {
  const { controllers } = useContext(ControllersContext);
  const { t } = useContext(LocalizationContext);

  const profile = useSelector(selectProfile);

  return (
    <Table.Row>
      {props.fightApplication.teams.map((team) => {
        const onJoin = () => {
          controllers.fightApplications.addPlayerToFightApplication({
            fightApplicationId: props.fightApplication.id,
            teamId: team.id,
            entityId: profile.entityId,
            nickname: profile.nickname,
          });
        };

        return (
          <Table.DataCell
            key={team.id}
            textAlign="center"
            border="unbordered"
            padding="small"
            colSpan={4}
          >
            {
              team.players.length < props.fightApplication.teamCapacity
                ? (
                  <Button
                    onClick={onJoin}
                    theme="secondary"
                    size="small"
                  >
                    <Text
                      theme="primary"
                      weight="bold"
                      type="decorated"
                    >
                      {t('fightRegistration.FIGHT_REGISTRATION_FIGHT_APPLICATION_TABLE_BUTTON_JOIN')}
                    </Text>
                  </Button>
                )
                : null
            }
          </Table.DataCell>
        );
      })}
    </Table.Row>
  );
};

export default AllVersusAllJoinButtonsRow;