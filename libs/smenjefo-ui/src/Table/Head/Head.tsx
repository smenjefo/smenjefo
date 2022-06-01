import React from "react";
import classnames from "classnames";

import styles from './styles/styles.module.scss';

export interface ITableHeadProps {
  theme?: 'primary';
  children: JSX.Element | JSX.Element[];
}

const TableHead: React.FC<ITableHeadProps> = (props) => {
  return (
    <thead
      className={classnames(styles['table__head'], {
        [`table__head_theme_${props.theme}`]: props.theme,
      })}
    >
      {props.children}
    </thead>
  );
};

TableHead.defaultProps = {
  theme: 'primary',
};

export default TableHead;