
import { useContext } from 'react';
import { Table } from '@smenjefo/smenjefo-ui';

import dataContext from "../Application/ApplicationDataContext";
import MutualFightHistoryRecord from './FightHistoryRecord/MutualFightHistoryRecord';
import SelfFightHistoryRecord from './FightHistoryRecord/SelfFightHistoryRecord';
import UnidirectionalFightHistoryRecord from './FightHistoryRecord/UnidirectionalFightHistoryRecord';
import { selectMyPlayerNickname } from '../../selectors/myPlayerSelectors';
import { selectHistory } from '../../selectors/historySelectors';

interface IFightHistoryProps {};

const FightHistory = (props: IFightHistoryProps) => {
  const data = useContext(dataContext);
  const userPlayerNickname = selectMyPlayerNickname(data);
  const history = selectHistory(data);

  return (
    <Table.Index border="unbordered">
      <Table.Body>
        {history.map((history) => {
          const initiator = history.historyRecordPlayers.find((historyRecordPlayer) => {
            return historyRecordPlayer.role === 'initiator';
          });

          const target = history.historyRecordPlayers.find((historyRecordPlayer) => {
            return historyRecordPlayer.role === 'target';
          });

          if (history.turnDirection === 'mutual') {
            return (
              <MutualFightHistoryRecord
                key={history.id}
                initiator={initiator}
                target={target}
                turnDirection={history.turnDirection}
                userPlayerNickname={userPlayerNickname}
              />
            );
          }

          if (history.turnDirection === 'unidirectional') {
            return (
              <UnidirectionalFightHistoryRecord
                key={history.id}
                initiator={initiator}
                target={target}
                turnDirection={history.turnDirection}
                userPlayerNickname={userPlayerNickname}
              />
            );
          }

          if (history.turnDirection === 'self') {
            return (
              <SelfFightHistoryRecord
                key={history.id}
                initiator={initiator}
                target={target}
                turnDirection={history.turnDirection}
                userPlayerNickname={userPlayerNickname}
              />
            );
          }

          return null;
        })}
      </Table.Body>
    </Table.Index>
  );
};

export default FightHistory;