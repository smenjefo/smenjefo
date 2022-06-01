import React, { useContext } from 'react';
import { Table, Button, Text } from '@smenjefo/smenjefo-ui';

import ControllersContext from '../../../ControllersProvider/ControllersContext';
import IDeclineButtonsRowProps from './IDeclineButtonsRowProps';
import LocalizationContext from '../../../Localization/LocalizationContext';

const DeclineButtonsRow = (props: IDeclineButtonsRowProps) => {
  const { controllers } = useContext(ControllersContext);
  const { t } = useContext(LocalizationContext);

  const onDecline = () => {
    controllers.fightApplications.removeFightApplication({
      fightApplicationId: props.fightApplication.id,
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
          type="submit"
          onClick={onDecline}
          theme="error"
        >
          <Text
            theme="error"
            weight="bold"
            type="decorated"
          >
            {t('fightRegistration.FIGHT_REGISTRATION_FIGHT_APPLICATION_DECLINE')}
          </Text>
        </Button>
      </Table.DataCell>
    </Table.Row>
  );
};

export default DeclineButtonsRow;