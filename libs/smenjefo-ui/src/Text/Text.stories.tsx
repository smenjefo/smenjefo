import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from './Text';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    theme: {
      options: ['black', 'gray', 'primary', 'error', 'success', 'white'],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
    weight: {
      options: ['bold', 'semi-bold'],
      control: { type: 'radio' },
      defaultValue: 'semi-bold',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      defaultValue: 'medium',
    },
    padding: {
      options: [null, 'small', 'medium', 'large'],
      control: { type: 'radio' },
      defaultValue: null,
    },
    tag: {
      options: ['a', 'span', 'h1', 'h2', 'h3'],
      control: { type: 'radio' },
      defaultValue: 'span',
    },
    display: {
      options: ['block'],
      control: { type: 'radio' },
      defaultValue: 'block',
    },
    type: {
      options: ['regular', 'decorated'],
      control: { type: 'radio' },
      defaultValue: 'regular',
    },
    textDecoration: {
      options: [null, 'underline'],
      control: { type: 'radio' },
      defaultValue: null,
    },
    href: {
      control: { type: 'text' },
      defaultValue: '',
    },
    align: {
      options: [null, 'center'],
      control: { type: 'radio' },
      defaultValue: null,
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Текст',
    },
  },
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = ({ children, ...props}) => {
  return (
    <Text {...props}>
      {children}
    </Text>
  );
};
