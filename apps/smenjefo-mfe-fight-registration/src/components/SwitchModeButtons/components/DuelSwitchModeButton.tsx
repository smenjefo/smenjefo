import React, { useContext } from 'react';
import { Text } from '@smenjefo/smenjefo-ui';

import ISwitchModeButtonProps from './ISwitchModeButtonProps';
import LocalizationContext from '../../Localization/LocalizationContext';

const DuelSwitchModeButton = (props: ISwitchModeButtonProps) => {
  const { t } = useContext(LocalizationContext);

  return (
    <Text
      tag="a"
      size="medium"
      weight="bold"
      type="decorated"
      textDecoration="underline"
      href="#"
      padding="medium"
      theme="primary"
      align="center"
      onClick={props.onClick}
    >
      {t('fightRegistration.FIGHT_REGISTRATION_LINKS_HEADER_DUEL')}
    </Text>
  );
};

export default DuelSwitchModeButton;