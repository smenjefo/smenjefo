import React from "react";
import classnames from 'classnames';

import styles from './styles/styles.module.scss';

export interface ITableProps {
  children: JSX.Element | JSX.Element[];
  style?: Record<string, any>;
  border?: 'unbordered' | 'unbordered-vertical';
}

const Table: React.FC<ITableProps> = (props) => {
  return (
    <table
      className={classnames(styles['table'], {
        [styles[`table_border_${props.border}`]]: props.border,
      })}
      style={props.style}
    >
      {props.children}
    </table>
  );
};

export default Table;