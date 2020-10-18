import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TodoList from './';

export default {
  title: 'Todo/Org/List',
  component: TodoList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;


const Template: Story = (args) => <TodoList {...args} />;

export const tht = Template.bind({});
tht.args = {
  onCheckBtnClick: (args: any) => {},
  onLikeBtnClick: (args: any) => {},
  onDeleteByItem: (args: any) => { },
  todos: [{
    checked: false,
    title: "title3",
    isComplete: false,
    isDelete: false,
  }]
};

