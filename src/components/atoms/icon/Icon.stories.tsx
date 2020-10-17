import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Icon from './';

export default {
  title: 'Toto/Atom/Icon',
  component: Icon,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;


const Template: Story = (args) => <Icon {...args} />;


export const IsLike = Template.bind({});
IsLike.args = {
  isLike: true
};

export const IsUnLike = Template.bind({});
IsUnLike.args = {
  isLike: false
};
