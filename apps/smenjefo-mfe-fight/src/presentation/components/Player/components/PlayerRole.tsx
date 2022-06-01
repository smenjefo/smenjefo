import { useContext } from 'react';
import { PlayerList, Text } from '@smenjefo/smenjefo-ui';
import TextMapping from '../../TextMapping/TextMapping';
import LocalizationContext from '../../Localization/LocalizationContext';

export interface IPlayerRoleProps {
  role: string;
};

const PlayerRole = (props: IPlayerRoleProps) => {
  const { t } = useContext(LocalizationContext);

  return (
    <PlayerList.PlayerRole>
      <TextMapping>
        {({ roleTextMapping }) => {
          return (
            <Text size="small">
              {t(roleTextMapping.mapValueToUserText(props.role))}
            </Text>
          );
        }}
      </TextMapping>
    </PlayerList.PlayerRole>
  );
};

export default PlayerRole;