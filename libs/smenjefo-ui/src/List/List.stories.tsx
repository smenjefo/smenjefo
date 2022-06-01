import React, { JSXElementConstructor } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Index from './Index/Index';
import Item from './Item/Item';

interface IStoryAdditionalProps {
  itemsCount: number;
  direction: 'horizontal' | 'vertical';
}

enum Margins {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export default {
  title: 'List',
  components: Index,
  argTypes: {
    itemsCount: {
      control: { type: 'text' },
      defaultValue: 3,
    },
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
      defaultValue: 'horizontal',
    },
    margin: {
      options: Margins,
      control: { type: 'radio' },
      defaultValue: Margins.SMALL,
    },
    marginLeft: {
      options: Margins,
      control: { type: 'radio' },
      defaultValue: Margins.SMALL,
    },
    marginRight: {
      options: Margins,
      control: { type: 'radio' },
      defaultValue: Margins.SMALL,
    },
    marginTop: {
      options: Margins,
      control: { type: 'radio' },
      defaultValue: Margins.SMALL,
    },
    marginBottom: {
      options: Margins,
      control: { type: 'radio' },
      defaultValue: Margins.SMALL,
    },
  },
} as ComponentMeta<typeof Index & IStoryAdditionalProps>;

export const Default: ComponentStory<typeof Index & JSXElementConstructor<IStoryAdditionalProps>> =
  ({ itemsCount, direction, ...props }) => {
    return (
      <Index {...props}>
        {new Array(Number(itemsCount)).fill(null).map((_, index) => {
          return (
            <Item
              key={index}
              direction={direction}
            >
              <span>
                {`item${index}`}
              </span>
            </Item>
          );
        })}
      </Index>
    );
  };
