import React from "react";
import classnames from 'classnames';

import styles from './styles/styles.module.scss';

export interface IFightPageProps {
  children: JSX.Element | JSX.Element[];
  type?: 'spectator',
}

const FightPage: React.FC<IFightPageProps> = (props) => {
  return (
    <div
      className={classnames(styles['fight-page'], {
        [`fight-page_type_${props.type}`]: props.type,
      })}
    >
      {props.children}
    </div>
  );
};

export default FightPage;