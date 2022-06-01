import React, { useContext } from 'react';
import { Table, Text } from '@smenjefo/smenjefo-ui';

import IHeaderRowProps from './IHeaderRowProps';
import LocalizationContext from '../../../Localization/LocalizationContext';

const DuelHeaderRow = (props: IHeaderRowProps) => {
  const { t } = useContext(LocalizationContext);

  return (
    <Table.Row>
      <Table.HeaderCell
        border="unbordered-vertical"
        padding="small"
      >
        <Text
          weight="bold"
          size="medium"
          display="block"
          theme="white"
        >
          {t('fightRegistration.FIGHT_REGISTRATION_FIGHT_APPLICATION_TABLE_TYPE')}
        </Text>

        <Text
          size="medium"
          display="block"
          theme="white"
        >
          {props.fightApplication.mode}
        </Text>
      </Table.HeaderCell>

      <Table.HeaderCell
        border="unbordered-vertical"
      />

      <Table.HeaderCell
        border="unbordered-vertical"
      />

      <Table.HeaderCell
        border="unbordered-vertical"
      />
    </Table.Row>
  );
};

export default DuelHeaderRow;