import React, { MouseEventHandler } from "react";
import classnames from 'classnames';

import styles from './styles/styles.module.scss';

export interface PlayerListPlayerProps {
  children: JSX.Element[];
  behavior?: 'in-game' | 'eliminated';
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const PlayerListPlayer: React.FC<PlayerListPlayerProps> = (props) => {
  return (
    <div
      className={classnames(styles['player-list__player'], {
        [`player-list__player_behavior_${props.behavior}`]: props.behavior,
      })}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

PlayerListPlayer.defaultProps = {
  behavior: 'in-game',
};

export default PlayerListPlayer;