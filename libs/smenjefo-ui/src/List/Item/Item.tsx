import React from "react";
import classnames from 'classnames';

import styles from './styles/styles.module.scss';

export interface ListItemProps {
  children: JSX.Element | JSX.Element[];
  direction?: 'horizontal' | 'vertical';
}

const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <li
      className={classnames(styles['list__item'], {
        [styles[`list__item_direction_${props.direction}`]]: props.direction,
      })}
    >
      {props.children}
    </li>
  );
};

export default ListItem;