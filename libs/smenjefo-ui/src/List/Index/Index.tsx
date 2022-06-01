import React from "react";
import classnames from "classnames";

import styles from './styles/styles.module.scss';

type MarginVariants = 'small' | 'medium' | 'large';

export interface ListIndexProps {
  children: JSX.Element[];
  margin?: MarginVariants;
  marginLeft?: MarginVariants;
  marginRight?: MarginVariants;
  marginTop?: MarginVariants;
  marginBottom?: MarginVariants;
}

const ListIndex: React.FC<ListIndexProps> = (props) => {
  return (
    <ul
      className={classnames(styles['list'], {
        [styles[`list_margin_${props.margin}`]]: props.margin,
        [styles[`list_margin-left_${props.marginLeft}`]]: props.marginLeft,
        [styles[`list_margin-right_${props.marginRight}`]]: props.marginRight,
        [styles[`list_margin-top_${props.marginTop}`]]: props.marginTop,
        [styles[`list_margin-bottom_${props.marginBottom}`]]: props.marginBottom,
      })}
    >
      {props.children}
    </ul>
  );
};

export default ListIndex;