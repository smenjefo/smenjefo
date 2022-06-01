import React from "react";

import styles from './styles/styles.module.scss';

export interface IFieldValueProps {
  children: JSX.Element | JSX.Element[];
}

const FieldValue: React.FC<IFieldValueProps> = (props) => {
  return (
    <div className={styles['form__field-value']}>
      {props.children}
    </div>
  );
};

export default FieldValue;