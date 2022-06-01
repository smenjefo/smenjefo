import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@smenjefo/smenjefo-ui';

import { FightType } from '../../slices/fightTypeSlice';
import FightApplicationFactory from './FightApplicationFactory';
import LocalizationContext from '../Localization/LocalizationContext';
import { selectCurrentFightApplication } from '../../selectors/fightApplicationsSelectors';
import ControllersContext from '../ControllersProvider/ControllersContext';

interface IFightApplicationsProps {
  fightType: FightType;
  fightApplicationId: string;
}

const CurrentFightApplication = (props: IFightApplicationsProps) => {
  const { t } = useContext(LocalizationContext);
  const { controllers } = useContext(ControllersContext);

  useEffect(() => {
    if (props.fightApplicationId) {
      controllers.fightApplications.loadFightApplication({
        fightApplicationId: props.fightApplicationId,
      });
    }
  }, [controllers.fightApplications, props.fightApplicationId]);

  const currentFightApplication = useSelector(selectCurrentFightApplication);

  if (!currentFightApplication) {
    return (
      <Text>
        {t('fightRegistration.FIGHT_REGISTRATION_FIGHT_APPLICATION_LOADING')}
      </Text>
    );
  }

  return (
    <FightApplicationFactory
      fightType={props.fightType}
      fightApplication={currentFightApplication}
    />
  );
};

export default CurrentFightApplication;