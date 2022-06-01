import React from "react";

import styles from './styles/styles.module.scss';

export interface IFightPageTimeStatusProps {
  children: JSX.Element | JSX.Element[];
}

const FightPageTimeStatusProps: React.FC<IFightPageTimeStatusProps> = (props) => {
  return (
    <div className={styles['fight-page__time-status']}>
      {props.children}
    </div>
  );
};

export default FightPageTimeStatusProps;