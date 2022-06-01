import React from "react";

import styles from './styles/styles.module.scss';

export interface IFightCompletedProps {
  children: JSX.Element | JSX.Element[];
}

const FightCompleted: React.FC<IFightCompletedProps> = (props) => {
  return (
    <div
      className={styles['fight-completed']}
    >
      {props.children}
    </div>
  );
};

export default FightCompleted;