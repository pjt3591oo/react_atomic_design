import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Todo from './';

export default {
  title: 'Todo/Temp/Todo',
  component: Todo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;


const Template: Story = (args) => <Todo {...args} />;

export const tht = Template.bind({});
tht.args = {

};

