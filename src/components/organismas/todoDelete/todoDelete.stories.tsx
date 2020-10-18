import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TodoDeleteBtn from './';

export default {
  title: 'Todo/Org/DeleteBtn',
  component: TodoDeleteBtn,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;


const Template: Story = (args) => <TodoDeleteBtn {...args} />;

export const button = Template.bind({});
button.args = {

};

