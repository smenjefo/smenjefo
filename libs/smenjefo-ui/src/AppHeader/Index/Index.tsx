import React from "react";

import styles from './styles/styles.module.scss';

export interface IAppHeaderProps {
  children: JSX.Element | JSX.Element[];
}

const AppHeader: React.FC<IAppHeaderProps> = (props) => {
  return (
    <div className={styles['app-header']}>
      {props.children}
    </div>
  );
};

export default AppHeader;