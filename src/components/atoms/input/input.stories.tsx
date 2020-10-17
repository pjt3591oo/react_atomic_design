import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Input from './';

export default {
  title: 'Toto/Atom/Input',
  component: Input,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;


const Template: Story = (args) => <Input {...args} />;


export const blackInput = Template.bind({});
blackInput.args = {
  value: ''
}

export const unBlackInput = Template.bind({});
unBlackInput.args = {
  value: 'test'
}
