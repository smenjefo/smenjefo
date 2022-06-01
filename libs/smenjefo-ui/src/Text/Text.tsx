import React, { MouseEventHandler } from "react";
import classnames from 'classnames';

import styles from './styles/styles.module.scss';

export interface ITextProps {
  children: string | number;
  href?: string;
  theme?: 'black' | 'gray' | 'primary' | 'error' | 'white' | 'success' | 'secondary',
  tag?: 'a' | 'span' | 'h1' | 'h2' | 'h3';
  size?: 'small' | 'medium' | 'large';
  weight?: 'semi-bold' | 'bold';
  display?: 'block';
  type?: 'decorated' | 'regular';
  textDecoration?: 'underline';
  padding?: 'small' | 'medium' | 'large';
  align?: 'center';
  onClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLSpanElement> & MouseEventHandler<HTMLHeadingElement>;
}

const Text: React.FC<ITextProps> = (props) => {
  const Tag = props.tag;

  return (
    <Tag
      className={classnames(styles['text'], {
        [`text_theme_${props.theme}`]: props.theme,
        [`text_weight_${props.weight}`]: props.weight,
        [`text_size_${props.size}`]: props.size,
        [`text_display_${props.display}`]: props.display,
        [`text_type_${props.type}`]: props.type,
        [`text_text-deroration_${props.textDecoration}`]: props.textDecoration,
        [`text_padding_${props.padding}`]: props.padding,
        [`text_align_${props.align}`]: props.align,
      })}
      { ...props.href && {
        href: props.href,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </Tag>
  );
};

Text.defaultProps = {
  theme: 'black',
  tag: 'span',
  size: 'medium',
  type: 'regular',
};

export default Text;