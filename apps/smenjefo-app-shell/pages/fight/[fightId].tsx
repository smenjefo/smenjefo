import { useRouter } from 'next/router';

import Fight from '../../components/MFEs/Fight';

export function Index() {
  const router = useRouter();
  const { fightId } = router.query;

  return (
    <Fight fightId={fightId} />
  );
}

export default Index;
