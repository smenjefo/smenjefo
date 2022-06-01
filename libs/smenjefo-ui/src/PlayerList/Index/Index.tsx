import React from "react";

import styles from './styles/styles.module.scss';

export interface PlayerListIndexProps {
  children: JSX.Element | JSX.Element[];
}

const PlayerListIndex: React.FC<PlayerListIndexProps> = (props) => {
  return (
    <div className={styles['player-list']}>
      {props.children}
    </div>
  );
};

export default PlayerListIndex;