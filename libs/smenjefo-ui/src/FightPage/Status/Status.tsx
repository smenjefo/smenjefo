import React from "react";

import styles from './styles/styles.module.scss';

export interface IFightPageStatusProps {
  children: JSX.Element | JSX.Element[];
}

const FightPageStatusProps: React.FC<IFightPageStatusProps> = (props) => {
  return (
    <div className={styles['fight-page__status']}>
      {props.children}
    </div>
  );
};

export default FightPageStatusProps;