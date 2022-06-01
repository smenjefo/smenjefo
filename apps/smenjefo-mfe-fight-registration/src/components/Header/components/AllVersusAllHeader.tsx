import React, { useContext } from 'react';
import { Text } from '@smenjefo/smenjefo-ui';

import IHeaderProps from './IHeaderProps';
import LocalizationContext from '../../Localization/LocalizationContext';

const AllVersusAllHeader = (props: IHeaderProps) => {
  const { t } = useContext(LocalizationContext);

  return (
    <Text
      tag="h2"
      size="large"
      weight="bold"
      type="decorated"
    >
      {t('fightRegistration.FIGHT_REGISTRATION_FIGHT_APPLICATION_HEADER_ALL_VERSUS_ALL')}
    </Text>
  );
};

export default AllVersusAllHeader;