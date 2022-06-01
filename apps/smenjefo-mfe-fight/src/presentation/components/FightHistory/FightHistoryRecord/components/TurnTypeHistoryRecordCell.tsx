
import React, { useContext } from 'react';
import { Table, Text } from '@smenjefo/smenjefo-ui';

import { TurnType } from '../../../../../application/dto/types';
import TextMapping from '../../../TextMapping/TextMapping';
import IHistoryDataCell from './IHistoryDataCell';
import LocalizationContext from '../../../Localization/LocalizationContext';

interface ITurnTypeHistoryRecordCellProps extends IHistoryDataCell {
  turnType: TurnType;
}

const TurnTypeHistoryRecordCell = (props: ITurnTypeHistoryRecordCellProps) => {
  const { t } = useContext(LocalizationContext);

  return (
    <Table.DataCell
      border="unbordered"
      textAlign={props.textAlign}
    >
      <TextMapping>
        {({ turnTypeTextMapping }) => {
          return (
            <Text
              padding="small"
              size="small"
              weight="bold"
            >
              {t(turnTypeTextMapping.mapValueToUserText(props.turnType))}
            </Text>
          );
        }}
      </TextMapping>
    </Table.DataCell>
  );
};

export default TurnTypeHistoryRecordCell;