import React, { useContext } from 'react';
import { Button, Text } from '@smenjefo/smenjefo-ui';

import ICreateApplicationButtonProps from './ICreateApplicationButtonProps';
import LocalizationContext from '../../Localization/LocalizationContext';

const AllVersusAllCreateApplicationButton = (props: ICreateApplicationButtonProps) => {
  const { t } = useContext(LocalizationContext);

  return (
    <Button
      onClick={props.onClick}
      theme="primary"
    >
      <Text
        theme="primary"
        weight="bold"
        type="decorated"
      >
        {t('fightRegistration.FIGHT_REGISTRATION_CREATE_APPLICATION_BUTTON')}
      </Text>
    </Button>
  );
};

export default AllVersusAllCreateApplicationButton;