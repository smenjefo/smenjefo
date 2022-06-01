import React, { useContext } from 'react';
import { Table, List, Text } from '@smenjefo/smenjefo-ui';

import IHeaderRowProps from './IHeaderRowProps';
import LocalizationContext from '../../../Localization/LocalizationContext';

const TeamOnTeamHeaderRow = (props: IHeaderRowProps) => {
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
      >
        <Text
          weight="bold"
          size="medium"
          display="block"
          theme="white"
        >
          {t('fightRegistration.FIGHT_REGISTRATION_FIGHT_APPLICATION_TABLE_TEAM_CAPACITY')}
        </Text>

        <Text
          size="medium"
          display="block"
          theme="white"
        >
          {`${props.fightApplication.teamCapacity}x${props.fightApplication.teamCapacity}`}
        </Text>
      </Table.HeaderCell>

      <Table.HeaderCell
        border="unbordered-vertical"
      >
        <Text
          weight="bold"
          size="medium"
          display="block"
          theme="white"
        >
          {t('fightRegistration.FIGHT_REGISTRATION_FIGHT_APPLICATION_TABLE_TEAM_FILTERS')}
        </Text>

        <List.Index>
          {props.fightApplication.fightFilters.map((filter) => {
            return (
              <List.Item key={filter.type}>
                <Text>
                  {`${filter.type}: ${filter.value}`}
                </Text>
              </List.Item>
            );
          })}
        </List.Index>
      </Table.HeaderCell>

      <Table.HeaderCell
        border="unbordered-vertical"
      >
        <Text
          weight="bold"
          size="medium"
          display="block"
          theme="white"
        >
          {t('fightRegistration.FIGHT_REGISTRATION_FIGHT_APPLICATION_TABLE_TEAM_TRIGGERS')}
        </Text>

        <List.Index>
          {props.fightApplication.fightTriggers.map((fightTrigger) => {
            return (
              <List.Item key={fightTrigger.id}>
                <Text
                  size="medium"
                  display="block"
                  theme="white"
                >
                  {fightTrigger.id}
                </Text>
              </List.Item>
            );
          })}
        </List.Index>
      </Table.HeaderCell>
    </Table.Row>
  );
};

export default TeamOnTeamHeaderRow;