import React from "react";
import classnames from 'classnames';

import styles from './styles/styles.module.scss';

type PaddingVariants = 'small' | 'medium' | 'large';

export interface ITableDataCellProps {
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

const TableDataCell: React.FC<ITableDataCellProps> = (props) => {
  return (
    <td
      className={classnames(styles['table__td'], {
        [styles[`table__td_text-align_${props.textAlign}`]]: props.textAlign,
        [styles[`table__td_border_${props.border}`]]: props.border,
        [styles[`table__td_padding_${props.padding}`]]: props.padding,
        [styles[`table__td_padding-left_${props.paddingLeft}`]]: props.paddingLeft,
        [styles[`table__td_padding-right_${props.paddingRight}`]]: props.paddingRight,
        [styles[`table__td_padding-top_${props.paddingTop}`]]: props.paddingTop,
        [styles[`table__td_padding-bottom_${props.paddingBottom}`]]: props.paddingBottom,
      })}
      colSpan={props.colSpan}
    >
      {props.children}
    </td>
  );
};

TableDataCell.defaultProps = {
  textAlign: 'center',
};

export default TableDataCell;