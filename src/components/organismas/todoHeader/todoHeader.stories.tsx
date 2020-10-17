import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TodoHeader from './';

export default {
  title: 'Toto/Org/Header',
  component: TodoHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;


const Template: Story = (args) => <TodoHeader {...args} />;

export const tht = Template.bind({});
tht.args = {

};

