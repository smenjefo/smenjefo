import React from "react";

import styles from './styles/styles.module.scss';

export interface PlayerListPlayerAvatarProps {
  children: JSX.Element | JSX.Element[];
}

const PlayerListPlayerAvatar: React.FC<PlayerListPlayerAvatarProps> = (props) => {
  return (
    <div className={styles['player-list__player-avatar']}>
      {props.children}
    </div>
  );
};

export default PlayerListPlayerAvatar;