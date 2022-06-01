import React from "react";

import styles from './styles/styles.module.scss';

export interface IFieldLabelProps {
  children: JSX.Element;
}

const FieldLabel: React.FC<IFieldLabelProps> = (props) => {
  return (
    <label className={styles['form__field-label']}>
      {props.children}
    </label>
  );
};

export default FieldLabel;