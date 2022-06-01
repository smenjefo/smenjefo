
import { useContext } from 'react';
import { TurnWindow as TurnWindowUI, Text } from '@smenjefo/smenjefo-ui';

import dataContext from "../Application/ApplicationDataContext";
import Turn from './components/Turn';
import LocalizationContext from '../Localization/LocalizationContext';
import {
  selectTurnWindowTurnListSimple,
  selectTurnWindowTurnListRole,
} from '../../selectors/turnWindowSelectors';

interface ITurnWindowProps {};

const TurnWindow = (props: ITurnWindowProps) => {
  const data = useContext(dataContext);
  const { t } = useContext(LocalizationContext);

  const simpleTurns = selectTurnWindowTurnListSimple(data);
  const roleTurns = selectTurnWindowTurnListRole(data);

  return (
    <TurnWindowUI.Index>
      <TurnWindowUI.Container>
        <Text
          type="decorated"
          size="medium"
          weight="bold"
        >
          {t('fight.FIGHT_TURN_WINDOW_CHOOSE_TURN_TYPE')}
        </Text>
      </TurnWindowUI.Container>

      {
        simpleTurns.length
          ? (
            <TurnWindowUI.Container>
              {simpleTurns.map((turn) => {
                return (
                  <Turn
                    key={turn.type}
                    turnType={turn.type}
                    isDisabled={turn.isDisabled}
                  />
                )
              })}
            </TurnWindowUI.Container>
          )
          : null
      }

      {
        roleTurns.length
          ? (
            <TurnWindowUI.Container>
              {roleTurns.map((turn) => {
                return (
                  <Turn
                    key={turn.type}
                    turnType={turn.type}
                    isDisabled={turn.isDisabled}
                    isSuper={true}
                  />
                )
              })}
            </TurnWindowUI.Container>
          )
          : null
      }
    </TurnWindowUI.Index>
  );
};

TurnWindow.defaultProps = {
  turnList: [],
};

export default TurnWindow;