import React from "react";

import styles from './styles/styles.module.scss';

export interface IFieldProps {
  children: JSX.Element | JSX.Element[];
}

const Field: React.FC<IFieldProps> = (props) => {
  return (
    <div className={styles['form__field']}>
      {props.children}
    </div>
  );
};

export default Field;