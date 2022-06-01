import React from "react";

import styles from './styles/styles.module.scss';

export interface ISelectOptionProps {
  children: string;
  value: any;
}

const SelectOption: React.FC<ISelectOptionProps> = (props) => {
  return (
    <option
      className={styles['select__option']}
      value={props.value}
    >
      {props.children}
    </option>
  );
};

export default SelectOption;