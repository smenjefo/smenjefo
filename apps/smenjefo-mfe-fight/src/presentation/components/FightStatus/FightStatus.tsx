
import { useContext } from 'react';
import { Slider, Text, FightPage } from '@smenjefo/smenjefo-ui';

import dataContext from "../Application/ApplicationDataContext";
import FightHistory from "../FightHistory/FightHistory";
import TurnWindow from '../TurnWindow/TurnWindow';
import LocalizationContext from '../Localization/LocalizationContext';
import { selectIsTurnWindowOpened } from '../../selectors/turnWindowSelectors';
import { selectStatusCurrentRoundNumber } from '../../selectors/statusSelectors';

interface IFightStatusProps {};

const FightStatus = (props: IFightStatusProps) => {
  const data = useContext(dataContext);
  const { t } = useContext(LocalizationContext);

  const isTurnWindowOpened = selectIsTurnWindowOpened(data);

  const currentRoundNumber = selectStatusCurrentRoundNumber(data);

  const item = isTurnWindowOpened
    ? 1
    : 0;

  return (
    <>
      <FightPage.StatusTurnNumber>
        <Text
          tag="h2"
          weight="bold"
          size="medium"
          type="decorated"
        >
          {t('fight.FIGHT_ROUND_NUMBER', { roundNumber: currentRoundNumber })}
        </Text>
      </FightPage.StatusTurnNumber>

      <FightPage.StatusHistory>
        <Slider.Index
          activeItem={item}
        >
          <Slider.Item>
            <FightHistory />
          </Slider.Item>

          <Slider.Item>
            <TurnWindow />
          </Slider.Item>
        </Slider.Index>
      </FightPage.StatusHistory>
    </>
  );
};

export default FightStatus;