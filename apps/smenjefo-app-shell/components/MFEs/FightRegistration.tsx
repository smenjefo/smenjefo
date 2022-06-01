import React from 'react';
import { useSelector } from 'react-redux';

import { selectFightRegistrationManifest } from '../../selectors/mfeManifestSelectors';
import MFELoader from '../MFELoader/MFELoader';
import IMFEProps from './IMFEProps';

interface IFightRegistrationMFEProps extends IMFEProps {}

const FightRegistrationMFE = (props: IFightRegistrationMFEProps) => {
  const fightRegistrationManifest = useSelector(selectFightRegistrationManifest);

  return (
    <MFELoader
      url={fightRegistrationManifest.url}
      scope={fightRegistrationManifest.scope}
      module={fightRegistrationManifest.module}
    />
  )
};

export default FightRegistrationMFE;