
import React from 'react';
import { Table } from '@smenjefo/smenjefo-ui';

import IFightHistoryRecord from './IFightHistoryRecord';
import DirectionHistoryRecordCell from './components/DirectionHistoryRecordCell';
import NicknameHistoryRecordCell from './components/NicknameHistoryRecordCell';
import TurnTypeHistoryRecordCell from './components/TurnTypeHistoryRecordCell';

const MutualFightHistoryRecord = (props: IFightHistoryRecord) => {
  return (
    <Table.Row>
      <NicknameHistoryRecordCell
        nickname={props.initiator.nickname}
        changedHP={props.initiator.changedHP}
        changedEnergy={props.initiator.changedEnergy}
        textAlign="right"
        isUser={props.userPlayerNickname === props.initiator.nickname}
      />

      <TurnTypeHistoryRecordCell
        turnType={props.initiator.turnType}
        textAlign="right"
      />

      <DirectionHistoryRecordCell
        turnDirection={props.turnDirection}
      />

      <TurnTypeHistoryRecordCell
        turnType={props.target.turnType}
        textAlign="left"
      />

      <NicknameHistoryRecordCell
        nickname={props.target.nickname}
        changedHP={props.target.changedHP}
        changedEnergy={props.target.changedEnergy}
        textAlign="left"
        isUser={props.userPlayerNickname === props.target.nickname}
      />
    </Table.Row>
  );
};

export default MutualFightHistoryRecord;