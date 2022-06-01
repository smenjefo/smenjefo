
import React, { useCallback, useContext } from 'react';
import { TurnWindow, Text } from '@smenjefo/smenjefo-ui';

import servicesContext from "../../Application/ApplicationServicesContext";
import { TurnType } from '../../../../application/dto/types';
import TextMapping from '../../TextMapping/TextMapping';
import LocalizationContext from '../../Localization/LocalizationContext';

interface ITurnProps {
  turnType: TurnType;
  isDisabled?: boolean;
  isSuper?: boolean;
};

const Turn = (props: ITurnProps) => {
  const services = useContext(servicesContext);
  const { t } = useContext(LocalizationContext);

  const onClick = useCallback(() => {
    services.turnService.makeTurn({ turnType: props.turnType });
  }, [props.turnType, services.turnService]);

  return (
    <TurnWindow.Turn
      onClick={onClick}
      theme={
        props.isSuper
          ? "super"
          : "simple"
      }
      isDisabled={props.isDisabled}
    >
      <TextMapping>
        {({ turnTypeTextMapping }) => {
          return (
            <Text>
              {t(turnTypeTextMapping.mapValueToUserText(props.turnType))}
            </Text>
          );
        }}
      </TextMapping>
    </TurnWindow.Turn>
  );
};

export default Turn;