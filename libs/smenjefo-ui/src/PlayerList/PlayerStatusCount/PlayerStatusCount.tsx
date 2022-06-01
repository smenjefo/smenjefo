import React from "react";

import styles from './styles/styles.module.scss';

export interface PlayerListPlayerStatusCountProps {
  children: JSX.Element;
}

const PlayerListPlayerStatusCount: React.FC<PlayerListPlayerStatusCountProps> = (props) => {
  return (
    <div className={styles['player-list__player-status-count']}>
      {props.children}
    </div>
  );
};

export default PlayerListPlayerStatusCount;