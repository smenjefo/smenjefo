import React, { JSXElementConstructor } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Index from './Index/Index';
import Option from './Option/Option';

interface IStoryAdditionalProps {
  itemsCount: number;
  valueText: string;
}

export default {
  title: 'Select',
  components: Index,
  argTypes: {
    isDisabled: {
      options: [false, true],
      control: { type: 'radio' },
      defaultValue: false,
    },
    additionalProps: {
      options: [null],
      control: { type: 'radio' },
      defaultValue: null,
    },
    itemsCount: {
      control: { type: 'text' },
      defaultValue: '3',
    },
    valueText: {
      control: { type: 'text' },
      defaultValue: 'option',
    },
  },
} as ComponentMeta<typeof Index & IStoryAdditionalProps>;

export const Default: ComponentStory<typeof Index & JSXElementConstructor<IStoryAdditionalProps>> =
  ({ itemsCount, valueText, ...props }) => {
    return (
      <Index {...props}>
        {new Array(Number(itemsCount)).fill(null).map((_, index) => {
          return (
            <Option
              key={index}
              value={valueText}
            >
              {valueText}
            </Option>
          );
        })}
      </Index>
    );
  };
