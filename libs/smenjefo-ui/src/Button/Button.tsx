import React from "react";
import classnames from 'classnames';

import styles from './styles/styles.module.scss';

export interface IButtonProps {
  children: JSX.Element;
  theme?: 'primary' | 'secondary' | 'success' | 'error',
  size?: 'large' | 'medium' | 'small',
  disabled?: boolean;
  type?: 'submit';

  onClick?: () => any;
}

const Button: React.FC<IButtonProps> = (props) => {
  const {
    disabled,
    theme,
    size,
    onClick,
  } = props;

  return (
    <button
      className={classnames(styles['button'], {
        'is-disabled': disabled,
        [`button_theme_${theme}`]: theme,
        [`button_size_${size}`]: size,
      })}
      type={props.type}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
  disabled: false,
};

export default Button;