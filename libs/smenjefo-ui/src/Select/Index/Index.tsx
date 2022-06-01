import React from "react";
import classnames from 'classnames';

import styles from './styles/styles.module.scss';

export interface ISelectProps {
  children: JSX.Element[];
  isDisabled?: boolean;
  additionalProps?: any;
}

const Select: React.FC<ISelectProps> = (props) => {
  return (
    <select
      className={classnames(styles['select'], {
        'is-disabled': props.isDisabled,
      })}
      {...props.additionalProps}
    >
      {props.children}
    </select>
  );
};

Select.defaultProps = {
  isDisabled: false,
  additionalProps: null,
};

export default Select;