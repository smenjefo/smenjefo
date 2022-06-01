import React from "react";

import styles from './styles/styles.module.scss';

export interface ITableCaptionProps {
  children: JSX.Element | JSX.Element[];
}

const TableCaption: React.FC<ITableCaptionProps> = (props) => {
  return (
    <caption
      className={styles['table__caption']}
    >
      {props.children}
    </caption>
  );
};

export default TableCaption;