import { useContext, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FightRegistration } from '@smenjefo/smenjefo-ui';

import PlayerFreePage from './PlayerFreePage/PlayerFreePage';
import PlayerInFightApplicationPage from './PlayerInFightApplicationPage/PlayerInFightApplicationPage';
import PlayerInFight from './PlayerInFight/PlayerInFight';
import ControllersContext from './ControllersProvider/ControllersContext';
import { selectProfileStatus } from '../selectors/profileSelectors';

interface IAppProps {}

const Application = (props: IAppProps) => {
  const { controllers } = useContext(ControllersContext);

  useEffect(() => {
    if (controllers) {
      controllers.profile.loadProfile();
    }
  }, [controllers]);

  const profileStatus = useSelector(selectProfileStatus);

  const Component = useMemo(() => {
    if (profileStatus === 'free') {
      return (
        <PlayerFreePage />
      );
    }

    if (profileStatus === 'inFightApplication') {
      return (
        <PlayerInFightApplicationPage />
      );
    }

    if (profileStatus === 'inFight') {
      return (
        <PlayerInFight />
      );
    }

    return null;
  }, [profileStatus]);

  return (
    <FightRegistration.Index>
      {Component}
    </FightRegistration.Index>
  );
};

export default Application;