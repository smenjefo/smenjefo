import React from "react";

import styles from './styles/styles.module.scss';

export interface IFightRegistrationProps {
  children: JSX.Element | JSX.Element[];
}

const FightRegistration: React.FC<IFightRegistrationProps> = (props) => {
  return (
    <div
      className={styles['fight-registration']}
    >
      {props.children}
    </div>
  );
};

export default FightRegistration;