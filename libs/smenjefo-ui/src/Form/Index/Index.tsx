import React, { FormEventHandler } from "react";

import styles from './styles/styles.module.scss';

export interface IFormProps {
  children: JSX.Element | JSX.Element[];
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

const Form: React.FC<IFormProps> = (props) => {
  return (
    <form
      className={styles['form']}
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  );
};

export default Form;