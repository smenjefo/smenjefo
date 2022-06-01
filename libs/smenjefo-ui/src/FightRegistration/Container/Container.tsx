import React from "react";

import styles from './styles/styles.module.scss';

export interface IFightRegistrationContainerProps {
  children: JSX.Element | JSX.Element[];
}

const FightRegistrationContainerProps: React.FC<IFightRegistrationContainerProps> = (props) => {
  return (
    <div className={styles['fight-registration__container']}>
      {props.children}
    </div>
  );
};

export default FightRegistrationContainerProps;