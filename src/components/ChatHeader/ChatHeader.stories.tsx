import type { Meta, StoryObj } from '@storybook/react';
import { ChatHeader } from './ChatHeader';

const meta: Meta<typeof ChatHeader> = {
  title: 'Components/ChatHeader',
  component: ChatHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChatHeader>;

export const Default: Story = {
  render: () => <ChatHeader />,
};
