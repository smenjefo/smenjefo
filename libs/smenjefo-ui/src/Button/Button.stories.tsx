import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import Text from '../Text/Text';

enum Themes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  ERROR = 'error',
}

const PrimaryChildren = (props) => {
  return (
    <Text theme="primary" type="decorated" weight="bold">
      {props.children}
    </Text>
  );
}

const ErrorChildren = (props) => {
  return (
    <Text theme="error" type="decorated" weight="bold">
      {props.children}
    </Text>
  );
}

const childrens = {
  [Themes.PRIMARY]: PrimaryChildren,
  [Themes.SECONDARY]: PrimaryChildren,
  [Themes.SUCCESS]: ErrorChildren,
  [Themes.ERROR]: ErrorChildren,
}

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    theme: {
      options: [Themes.PRIMARY, Themes.SECONDARY, Themes.SUCCESS, Themes.ERROR],
      control: { type: 'radio' },
      defaultValue: Themes.PRIMARY,
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
      defaultValue: 'medium',
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
      defaultValue: false,
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Кнопка',
    },
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = ({ children, ...props}) => {
  const ChildrenComponent = childrens[props.theme];

  return (
    <Button {...props}>
      <ChildrenComponent>
        {children}
      </ChildrenComponent>
    </Button>
  );
};
