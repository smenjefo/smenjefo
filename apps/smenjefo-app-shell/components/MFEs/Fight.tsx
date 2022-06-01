import React from 'react';
import { useSelector } from 'react-redux';

import { selectFightManifest } from '../../selectors/mfeManifestSelectors';
import MFELoader from '../MFELoader/MFELoader';
import IMFEProps from './IMFEProps';

interface IFightMFEProps extends IMFEProps {
  fightId: any;
}

const FightMFE = (props: IFightMFEProps) => {
  const fightManifest = useSelector(selectFightManifest);

  return (
    <MFELoader
      url={fightManifest.url}
      scope={fightManifest.scope}
      module={fightManifest.module}
      additionalProps={{
        fightId: props.fightId,
      }}
    />
  )
};

export default FightMFE;