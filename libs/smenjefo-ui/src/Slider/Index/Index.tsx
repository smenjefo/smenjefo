import React from "react";

import styles from './styles/styles.module.scss';

export interface ISliderProps {
  children: JSX.Element[];
  activeItem: number;
}

const Slider: React.FC<ISliderProps> = (props) => {
  return (
    <div className={styles['slider']}>
      {props.children[props.activeItem]}
    </div>
  );
};

Slider.defaultProps = {
  activeItem: 0,
};

export default Slider;