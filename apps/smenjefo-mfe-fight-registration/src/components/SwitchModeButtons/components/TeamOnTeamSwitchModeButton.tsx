import React, { useContext } from 'react';
import { Text } from '@smenjefo/smenjefo-ui';

import ISwitchModeButtonProps from './ISwitchModeButtonProps';
import LocalizationContext from '../../Localization/LocalizationContext';

const TeamOnTeamSwitchModeButton = (props: ISwitchModeButtonProps) => {
  const { t } = useContext(LocalizationContext);

  return (
    <Text
      tag="a"
      size="medium"
      weight="bold"
      type="decorated"
      textDecoration="underline"
      padding="medium"
      href="#"
      theme="primary"
      align="center"
      onClick={props.onClick}
    >
      {t('fightRegistration.FIGHT_REGISTRATION_LINKS_HEADER_TEAM_ON_TEAM')}
    </Text>
  );
};

export default TeamOnTeamSwitchModeButton;