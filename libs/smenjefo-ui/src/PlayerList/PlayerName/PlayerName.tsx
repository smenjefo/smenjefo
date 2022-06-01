import React from "react";

import styles from './styles/styles.module.scss';

export interface PlayerListPlayerNameProps {
  children: JSX.Element;
}

const PlayerListPlayerName: React.FC<PlayerListPlayerNameProps> = (props) => {
  return (
    <div className={styles['player-list__player-name']}>
      {props.children}
    </div>
  );
};

export default PlayerListPlayerName;