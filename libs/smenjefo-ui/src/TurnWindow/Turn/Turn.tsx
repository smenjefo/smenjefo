import React, { MouseEventHandler } from "react";
import classnames from 'classnames';

import styles from './styles/styles.module.scss';

export interface ITurnProps {
  children: JSX.Element;
  theme?: 'simple' | 'super';
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Turn: React.FC<ITurnProps> = (props) => {
  return (
    <div
      className={classnames(styles['turn-window__turn'], {
        [`turn-window__turn_theme_${props.theme}`]: props.theme,
        'is-disabled': props.isDisabled,
      })}
      aria-disabled={props.isDisabled}
      role="button"
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

Turn.defaultProps = {
  theme: 'simple',
};

export default Turn;