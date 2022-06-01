import React from "react";

import styles from './styles/styles.module.scss';

export interface IFightPageStatusTurnNumberProps {
  children: JSX.Element | JSX.Element[];
}

const FightPageStatusTurnNumberProps: React.FC<IFightPageStatusTurnNumberProps> = (props) => {
  return (
    <div className={styles['fight-page__status-turn-number']}>
      {props.children}
    </div>
  );
};

export default FightPageStatusTurnNumberProps;