import React, { useContext } from 'react';
import LocalizationContext from '../Localization/LocalizationContext';

import IMFEProps from './IMFEProps';

// TODO: move to mfe later
const ProfileMFE = (props: IMFEProps) => {
  const { t } = useContext(LocalizationContext);

  return (
    <div>
      <h1>{t('profile.PROFILE_TITLE')}</h1>

      <div>
        work in progress.. :)
      </div>
    </div>
  )
};

export default ProfileMFE;