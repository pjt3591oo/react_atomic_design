import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { DeleteIcon, UnCompleteIcon, CompleteIcon } from './';

export default {
  title: 'Todo/Atom/Icon',
  component: CompleteIcon,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const DeleteTemplete: Story = (args) => <DeleteIcon {...args} />;
export const deleteIcon = DeleteTemplete.bind({});
deleteIcon.args = {
};

const CompleteTemplete: Story = (args) => <CompleteIcon {...args} />;
export const completeIcon = CompleteTemplete.bind({});
completeIcon.args = {
};

const UnCompleteTemplete: Story = (args) => <UnCompleteIcon {...args} />;
export const unCompleteIcon = UnCompleteTemplete.bind({});
unCompleteIcon.args = {
};
