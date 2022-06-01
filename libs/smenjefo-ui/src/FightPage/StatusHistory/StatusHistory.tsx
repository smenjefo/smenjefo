import React from "react";

import styles from './styles/styles.module.scss';

export interface IFightPageStatusHistoryProps {
  children: JSX.Element | JSX.Element[];
}

const FightPageStatusHistoryProps: React.FC<IFightPageStatusHistoryProps> = (props) => {
  return (
    <div className={styles['fight-page__status-history']}>
      {props.children}
    </div>
  );
};

export default FightPageStatusHistoryProps;