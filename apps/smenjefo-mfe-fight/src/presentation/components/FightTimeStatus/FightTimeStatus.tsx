
import { useContext } from 'react';

import { selectStatusCurrentRoundNumber, selectStatusRemainingTime } from '../../selectors/statusSelectors';

import dataContext from "../Application/ApplicationDataContext";
import ApplicationServicesContext from '../Application/ApplicationServicesContext';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

interface IFightTimeStatusProps {};

const FightTimeStatus = (props: IFightTimeStatusProps) => {
  const data = useContext(dataContext);
  const services = useContext(ApplicationServicesContext);

  const remainingTime = selectStatusRemainingTime(data);
  const currentRoundNumber = selectStatusCurrentRoundNumber(data);

  if (!remainingTime) {
    return null;
  }

  return (
    <CountdownTimer
      timerId={currentRoundNumber}
      initialTime={remainingTime}
      onReattempt={services.fightService.initializeFight}
    />
  );
};

export default FightTimeStatus;