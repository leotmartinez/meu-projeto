import type { Meta, StoryObj } from '@storybook/react';
import { MessageInput } from './MessageInput';

const meta: Meta<typeof MessageInput> = {
  title: 'Components/MessageInput',
  component: MessageInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MessageInput>;

export const Default: Story = {
  render: () => <MessageInput />,
};
