import React from "react";

import styles from './styles/styles.module.scss';

export interface IContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Container: React.FC<IContainerProps> = (props) => {
  return (
    <div
      className={styles['turn-window__container']}
    >
      {props.children}
    </div>
  );
};

export default Container;