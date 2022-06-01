import { useContext, useEffect } from 'react';
import { FightPage as FightPageUI } from '@smenjefo/smenjefo-ui';

import dataContext from "../Application/ApplicationDataContext";
import servicesContext from "../Application/ApplicationServicesContext";
import FightStatus from "../FightStatus/FightStatus";
import PlayerList from "../PlayerList/PlayerList";
import FightTimeStatus from "../FightTimeStatus/FightTimeStatus";
import { selectMyPlayerId } from '../../selectors/myPlayerSelectors';
import { selectPlayersByTeamId } from '../../selectors/playersSelectors';
import { selectTeamsIds } from '../../selectors/teamsSelectors';

interface IFightPageProps {};

const FightPage = (props: IFightPageProps) => {
  const data = useContext(dataContext);
  const services = useContext(servicesContext);

  const myPlayerId = selectMyPlayerId(data);

  const [teamOneId, teamTwoId] = selectTeamsIds(data);

  const teamOnePlayers = selectPlayersByTeamId(data, teamOneId);
  const teamTwoPlayers = selectPlayersByTeamId(data, teamTwoId);

  useEffect(() => {
    services.fightService.initializeFight();
  }, [services.fightService]);

  return (
    <FightPageUI.Index>
      <FightPageUI.Players>
        <PlayerList
          players={teamOnePlayers}
          userPlayerId={myPlayerId}
        />
      </FightPageUI.Players>

      <FightPageUI.TimeStatus>
        <FightTimeStatus />
      </FightPageUI.TimeStatus>

      <FightPageUI.Status>
        <FightStatus />
      </FightPageUI.Status>

      <FightPageUI.Players>
        <PlayerList
          players={teamTwoPlayers}
          userPlayerId={myPlayerId}
        />
      </FightPageUI.Players>
    </FightPageUI.Index>
  );
};

export default FightPage;