import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'

import { selectProfile } from '../../selectors/profileSelectors';

const RedirectionLogic = () => {
  const router = useRouter()

  const profile = useSelector(selectProfile);
  
  useEffect(() => {
    if (profile.status === 'inFight') {
      const url = `/fight/${profile.fightId}`;

      router.replace(url, url, { shallow: true });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile.status]);

  return null;
};

export default RedirectionLogic;