import React from 'react';

import IHistoryDTO from '../../../application/dto/IHistoryDTO';
import IMyPlayerDTO from '../../../application/dto/IMyPlayerDTO';
import IPlayerDTO from '../../../application/dto/IPlayerDTO';
import IStatusDTO from '../../../application/dto/IStatusDTO';
import ITeamDTO from '../../../application/dto/ITeamDTO';
import ITurnWindowDTO from '../../../application/dto/ITurnWindowDTO';

export interface IApplicationDataContext {
  myPlayer: IMyPlayerDTO[];
  players: IPlayerDTO[];
  teams: ITeamDTO[];
  history: IHistoryDTO[];
  status: IStatusDTO[];
  turnWindow: ITurnWindowDTO[];
}

const ApplicationDataContext = React.createContext<IApplicationDataContext>(
  // initial state creates inside ApplicationDataProvider
  {} as IApplicationDataContext,
);

export default ApplicationDataContext;