import React from "react";

import styles from './styles/styles.module.scss';

export interface ITurnWindowProps {
  children: JSX.Element | JSX.Element[];
}

const TurnWindow: React.FC<ITurnWindowProps> = (props) => {
  return (
    <div className={styles['turn-window']}>
      {props.children}
    </div>
  );
};

export default TurnWindow;