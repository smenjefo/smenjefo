import { useSelector } from 'react-redux';
import { FightRegistration } from '@smenjefo/smenjefo-ui';

import SwitchModeButtons from '../SwitchModeButtons/SwitchModeButtons';
import CreateApplication from '../CreateApplication/CreateApplication';
import FightApplications from '../FightApplications/FightApplications';
import Header from '../Header/Header';
import { selectCurrentFightType } from '../../selectors/fightTypeSelectors';

interface IPlayerFreePageProps {}

const PlayerFreePage = (props: IPlayerFreePageProps) => {
  const currentFightType = useSelector(selectCurrentFightType);

  return (
    <>
      <FightRegistration.Container>
        <SwitchModeButtons />
      </FightRegistration.Container>

      <FightRegistration.Container>
        <Header
          fightType={currentFightType}
        />
      </FightRegistration.Container>

      <FightRegistration.Container>
        <CreateApplication
          fightType={currentFightType}
        />
      </FightRegistration.Container>

      <FightRegistration.Container>
        <FightApplications
          fightType={currentFightType}
        />
      </FightRegistration.Container>
    </>
  );
};

export default PlayerFreePage;