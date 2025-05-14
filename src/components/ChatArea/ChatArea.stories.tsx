import type { Meta, StoryObj } from '@storybook/react';
import { ChatArea } from './ChatArea';

const meta: Meta<typeof ChatArea> = {
  title: 'Components/ChatArea',
  component: ChatArea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChatArea>;

export const Default: Story = {
  render: () => <ChatArea />,
};
