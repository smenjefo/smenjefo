import React from "react";

import styles from './styles/styles.module.scss';

export interface IFightCompletedContainerProps {
  children: JSX.Element | JSX.Element[];
}

const FightCompletedContainer: React.FC<IFightCompletedContainerProps> = (props) => {
  return (
    <div
      className={styles['fight-completed__container']}
    >
      {props.children}
    </div>
  );
};

export default FightCompletedContainer;