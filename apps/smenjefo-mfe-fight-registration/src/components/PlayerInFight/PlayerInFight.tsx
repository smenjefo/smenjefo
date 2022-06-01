import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { FightRegistration } from '@smenjefo/smenjefo-ui';

import LocalizationContext from '../Localization/LocalizationContext';
import { selectProfile } from '../../selectors/profileSelectors';

interface IPlayerInFightApplicationPageProps {}

const PlayerInFight = (props: IPlayerInFightApplicationPageProps) => {
  const { t } = useContext(LocalizationContext);

  const profile = useSelector(selectProfile);

  return (
    <FightRegistration.Container>
      <div>
        {t('fightRegistration.FIGHT_REGISTRATION_FIGHT_ALREADY_STARTED')}
      </div>

      <div>
        <a href={`/fight/${profile.fightId}`}>
          {t('fightRegistration.FIGHT_REGISTRATION_GO_TO_FIGHT')}
        </a>
      </div>
    </FightRegistration.Container>
  );
};

export default PlayerInFight;