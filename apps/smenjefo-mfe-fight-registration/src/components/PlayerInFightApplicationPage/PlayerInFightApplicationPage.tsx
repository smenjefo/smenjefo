import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { FightRegistration, Text } from '@smenjefo/smenjefo-ui';

import CurrentFightApplication from '../FightApplications/CurrentFightApplication';
import LocalizationContext from '../Localization/LocalizationContext';
import { selectCurrentFightType } from '../../selectors/fightTypeSelectors';
import { selectFightApplicationId } from '../../selectors/profileSelectors';

interface IPlayerInFightApplicationPageProps {}

const PlayerInFightApplicationPage = (props: IPlayerInFightApplicationPageProps) => {
  const { t } = useContext(LocalizationContext);

  const profileFightApplicationId = useSelector(selectFightApplicationId);
  const currentFightType = useSelector(selectCurrentFightType);

  return (
    <>
      <FightRegistration.Container>
        <CurrentFightApplication
          fightType={currentFightType}
          fightApplicationId={profileFightApplicationId}
        />
      </FightRegistration.Container>

      <FightRegistration.Container>
        <Text
          theme="gray"
          size="small"
        >
          {t('fightRegistration.FIGHT_REGISTRATION_WAITING_FOR_OTHER_PLAYERS')}
        </Text>
      </FightRegistration.Container>
    </>
  );
};

export default PlayerInFightApplicationPage;