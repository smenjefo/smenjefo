import React from "react";

import styles from './styles/styles.module.scss';

export interface IImageProps {
  src: string,
  width: number | string,
  height: number | string,
  alt: string,
}

const Image: React.FC<IImageProps> = (props) => {
  const { src, width, height, alt } = props;

  return (
    <img
      className={styles['image']}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default Image;