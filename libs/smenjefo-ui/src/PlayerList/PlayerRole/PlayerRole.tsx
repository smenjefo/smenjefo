import React from "react";

import styles from './styles/styles.module.scss';

export interface PlayerListPlayerRoleProps {
  children: JSX.Element;
}

const PlayerListPlayerRole: React.FC<PlayerListPlayerRoleProps> = (props) => {
  return (
    <div className={styles['player-list__player-role']}>
      {props.children}
    </div>
  );
};

export default PlayerListPlayerRole;