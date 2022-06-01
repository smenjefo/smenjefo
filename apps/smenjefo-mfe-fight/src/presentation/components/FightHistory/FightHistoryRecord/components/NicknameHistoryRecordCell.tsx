
import React from 'react';
import { Table, Text } from '@smenjefo/smenjefo-ui';

import IHistoryDataCell from './IHistoryDataCell';

interface INicknameHistoryRecordCellProps extends IHistoryDataCell {
  nickname: string;
  changedHP: string;
  changedEnergy: string;
  isUser?: boolean;
}

const NicknameHistoryRecordCell = (props: INicknameHistoryRecordCellProps) => {
  const UserPlayerNickname = (
    <Text
      theme="primary"
      weight="bold"
      padding="small"
    >
      {props.nickname}
    </Text>
  );

  const SimpleNickname = (
    <Text
      padding="small"
    >
      {props.nickname}
    </Text>
  );

  const ChangedHP = props.changedHP
    ? (
      <Text
        theme="error"
        weight="bold"
        padding="small"
      >
        {props.changedHP}
      </Text>
    )
    : null;

  const ChangedEnergy = props.changedEnergy
    ? (
      <Text
        theme="success"
        weight="bold"
        padding="small"
      >
        {props.changedEnergy}
      </Text>
    )
    : null;

  const Nickname = props.isUser
    ? UserPlayerNickname
    : SimpleNickname;

  const renderFromLeftToRight = props.textAlign === 'right';

  return (
    <Table.DataCell
      border="unbordered"
      textAlign={props.textAlign}
    >
      {
        renderFromLeftToRight
          ? (
            <>
              {ChangedEnergy}
              {ChangedHP}
              {Nickname}
            </>
          )
          : (
            <>
              {Nickname}
              {ChangedHP}
              {ChangedEnergy}
            </>
          )
      }
    </Table.DataCell>
  );
};

export default NicknameHistoryRecordCell;