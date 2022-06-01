import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@smenjefo/smenjefo-ui';

import { FightType } from '../../slices/fightTypeSlice';
import FightApplicationFactory from './FightApplicationFactory';
import LocalizationContext from '../Localization/LocalizationContext';
import { selectFightApplicationsList } from '../../selectors/fightApplicationsSelectors';

interface IFightApplicationsProps {
  fightType: FightType;
}

const FightApplications = (props: IFightApplicationsProps) => {
  const { t } = useContext(LocalizationContext);

  const fightApplications = useSelector(selectFightApplicationsList);

  if (!fightApplications.length) {
    return (
      <Text
        theme="gray"
        size="small"
      >
        {t('fightRegistration.FIGHT_REGISTRATION_FIGHT_APPLICATION_EMPTY_FIGHTS')}
      </Text>
    );
  }

  return (
    <div>
      {fightApplications.map((fightApplication) => {
        return (
          <FightApplicationFactory
            key={fightApplication.id}
            fightType={props.fightType}
            fightApplication={fightApplication}
          />
        );
      })}
    </div>
  );
};

export default FightApplications;