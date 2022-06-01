import React from "react";

import styles from './styles/styles.module.scss';

export interface ISliderItemProps {
  children: JSX.Element | JSX.Element[];
}

const SliderItem: React.FC<ISliderItemProps> = (props) => {
  return (
    <div className={styles['slider__item']}>
      {props.children}
    </div>
  );
};

export default SliderItem;