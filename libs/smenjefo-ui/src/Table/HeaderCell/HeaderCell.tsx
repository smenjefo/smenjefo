import React from "react";
import classnames from 'classnames';

import styles from './styles/styles.module.scss';

type PaddingVariants = 'small' | 'medium' | 'large';

export interface ITableHeadCellProps {
  children?: JSX.Element | JSX.Element[];
  colSpan?: number;
  textAlign?: 'center' | 'left' | 'right';
  border?: 'unbordered' | 'unbordered-vertical';
  padding?: PaddingVariants;
  paddingLeft?: PaddingVariants;
  paddingRight?: PaddingVariants;
  paddingTop?: PaddingVariants;
  paddingBottom?: PaddingVariants;
}

const TableHeadCell: React.FC<ITableHeadCellProps> = (props) => {
  return (
    <th
      className={classnames(styles['table__th'], {
        [styles[`table__th_text-align_${props.textAlign}`]]: props.textAlign,
        [styles[`table__th_border_${props.border}`]]: props.border,
        [styles[`table__th_padding_${props.padding}`]]: props.padding,
        [styles[`table__th_padding-left_${props.paddingLeft}`]]: props.paddingLeft,
        [styles[`table__th_padding-right_${props.paddingRight}`]]: props.paddingRight,
        [styles[`table__th_padding-top_${props.paddingTop}`]]: props.paddingTop,
        [styles[`table__th_padding-bottom_${props.paddingBottom}`]]: props.paddingBottom,
      })}
      colSpan={props.colSpan}
    >
      {props.children}
    </th>
  );
};

TableHeadCell.defaultProps = {
  textAlign: 'center',
};

export default TableHeadCell;