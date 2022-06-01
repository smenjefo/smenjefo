
import { Table, Text } from '@smenjefo/smenjefo-ui';

import { TurnDirection } from '../../../../../application/dto/types';
import TextMapping from '../../../TextMapping/TextMapping';
import IHistoryDataCell from './IHistoryDataCell';

interface IDirectionHistoryRecordCellProps extends IHistoryDataCell {
  turnDirection: TurnDirection;
}

const DirectionHistoryRecordCell = (props: IDirectionHistoryRecordCellProps) => {
  return (
    <Table.DataCell border="unbordered">
      <TextMapping>
        {({ directionTextMapping }) => {
          return (
            <Text
              padding="small"
            >
              {directionTextMapping.mapValueToUserText(props.turnDirection)}
            </Text>
          )
        }}
      </TextMapping>
    </Table.DataCell>
  );
};

export default DirectionHistoryRecordCell;