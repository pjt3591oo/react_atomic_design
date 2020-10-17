import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Font from './';


export default {
  title: 'Toto/Atom/Checkbox',
  component: Font,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story = (args) => <Font {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  
};