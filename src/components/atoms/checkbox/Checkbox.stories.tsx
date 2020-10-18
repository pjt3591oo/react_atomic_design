import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox from './';

export default {
  title: 'Todo/Atom/Checkbox',
  component: Checkbox,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story = (args) => <Checkbox {...args} />;

export const check = Template.bind({});
check.args = {
  checked: true
};

export const uncheck = Template.bind({});
uncheck.args = {
  checked: false
};
