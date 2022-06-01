import React from "react";

import styles from './styles/styles.module.scss';

export interface IFightPagePlayersProps {
  children: JSX.Element | JSX.Element[];
}

const FightPagePlayersProps: React.FC<IFightPagePlayersProps> = (props) => {
  return (
    <div className={styles['fight-page__players']}>
      {props.children}
    </div>
  );
};

export default FightPagePlayersProps;