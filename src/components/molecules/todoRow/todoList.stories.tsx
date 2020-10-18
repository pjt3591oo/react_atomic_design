import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TodoRow from './';

export default {
  title: 'Todo/Mole/Row',
  component: TodoRow,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;


const Template: Story = (args) => <TodoRow {...args} />;

export const Row00 = Template.bind({});
Row00.args = {
  checked: false,
  title: "title1",
  isComplete: false
};

export const Row01 = Template.bind({});
Row01.args = {
  checked: false,
  title: "title1",
  isComplete: true
};

export const Row10 = Template.bind({});
Row10.args = {
  checked: true,
  title: "title1",
  isComplete: false
};

export const Row11 = Template.bind({});
Row11.args = {
  checked: true,
  title: "title1",
  isComplete: true
};
