import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Index from './Index/Index';
import Field from './Field/Field';
import FieldLabel from './FieldLabel/FieldLabel';
import FieldValue from './FieldValue/FieldValue';

export default {
  title: 'Form',
  component: Index,
} as ComponentMeta<typeof Index>;

export const Default: ComponentStory<typeof Index> = (props) => {
  return (
    <Index>
      <Field>
        <FieldLabel>
          <div>
            Label
          </div>
        </FieldLabel>

        <FieldValue>
          <div>
            Value
          </div>
        </FieldValue>
      </Field>
    </Index>
  );
};
