import React, { useContext } from 'react';
import { FightCompleted, Text } from '@smenjefo/smenjefo-ui';
import LocalizationContext from '../Localization/LocalizationContext';

interface IFightCompletedPageProps {};

const FightCompletedPage = (props: IFightCompletedPageProps) => {
  const { t } = useContext(LocalizationContext);

  return (
    <FightCompleted.Index>
      <FightCompleted.Container>
        <Text
          tag="h2"
          size="large"
          type="decorated"
          theme="primary"
          padding="medium"
        >
          {t('fight.FIGHT_FIGHT_IS_OVER')}
        </Text>

        <Text
          size="medium"
          textDecoration="underline"
          tag="a"
          href="/fight-registration"
          padding="medium"
        >
          {t('fight.FIGHT_RETURN_TO_FIGHT_APPLICATIONS_LIST')}
        </Text>
      </FightCompleted.Container>
    </FightCompleted.Index>
  );
};

export default FightCompletedPage;