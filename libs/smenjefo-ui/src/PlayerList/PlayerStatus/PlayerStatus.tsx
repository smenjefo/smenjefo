import React from "react";

import styles from './styles/styles.module.scss';

export interface PlayerListPlayerStatusProps {
  children: JSX.Element[];
}

const PlayerListPlayerStatus: React.FC<PlayerListPlayerStatusProps> = (props) => {
  return (
    <div className={styles['player-list__player-status']}>
      {props.children}
    </div>
  );
};

export default PlayerListPlayerStatus;