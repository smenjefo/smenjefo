import React, { JSXElementConstructor } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Index from './Index/Index';
import Turn from './Turn/Turn';
import Container from './Container/Container';

interface IStoryAdditionalProps {
  turnTheme: 'simple' | 'super';
  turnDisabled: boolean;
}

export default {
  title: 'TurnWindow',
  component: Index,
  argTypes: {
    turnTheme: {
      options: ['simple', 'super'],
      control: { type: 'radio' },
      defaultValue: 'simple',
    },
    turnDisabled: {
      options: [false, true],
      control: { type: 'radio' },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Index & IStoryAdditionalProps>;

export const Default: ComponentStory<typeof Index & JSXElementConstructor<IStoryAdditionalProps>> = ({
  turnTheme,
  turnDisabled,
  ...props
}) => {
  return (
    <Index {...props}>
      <Container>
        <span>Some header</span>
      </Container>

      <Container>
        <Turn
          isDisabled={turnDisabled}
          theme={turnTheme}
        >
          <span>
            Turn Area
          </span>
        </Turn>

        <Turn
          isDisabled={turnDisabled}
          theme={turnTheme}
        >
          <span>
            Turn Area
          </span>
        </Turn>

        <Turn
          isDisabled={turnDisabled}
          theme={turnTheme}
        >
          <span>
            Turn Area
          </span>
        </Turn>
      </Container>

      <Container>
        <Turn
          isDisabled={turnDisabled}
          theme={turnTheme}
        >
          <span>
            Turn Area
          </span>
        </Turn>

        <Turn
          isDisabled={turnDisabled}
          theme={turnTheme}
        >
          <span>
            Turn Area
          </span>
        </Turn>

        <Turn
          isDisabled={turnDisabled}
          theme={turnTheme}
        >
          <span>
            Turn Area
          </span>
        </Turn>
      </Container>
    </Index>
  );
};
