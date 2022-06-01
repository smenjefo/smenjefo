import React from "react";
import classnames from 'classnames';

import styles from './styles/styles.module.scss';

export interface PlayerListPlayerAvatarTurnStatusProps {
  theme?: 'in-progress' | 'completed';
}

const PlayerListPlayerAvatarTurnStatus: React.FC<PlayerListPlayerAvatarTurnStatusProps> = (props) => {
  return (
    <div
      className={classnames(styles['player-list__player-avatar-turn-status'], {
        [`player-list__player-avatar-turn-status_${props.theme}`]: props.theme,
      })}
    />
  );
};

PlayerListPlayerAvatarTurnStatus.defaultProps = {
  theme: 'in-progress',
};

export default PlayerListPlayerAvatarTurnStatus;