
import React from 'react';
import { Table } from '@smenjefo/smenjefo-ui';

import IHistoryDataCell from './IHistoryDataCell';

interface IEmptyHistoryRecordCellProps extends IHistoryDataCell {}

const EmptyHistoryRecordCell = (props: IEmptyHistoryRecordCellProps) => {
  return (
    <Table.DataCell border="unbordered" />
  );
};

export default EmptyHistoryRecordCell;