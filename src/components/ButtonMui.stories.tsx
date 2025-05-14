import type { Meta, StoryObj } from '@storybook/react';
import ButtonMui from './ButtonMui';

const meta: Meta<typeof ButtonMui> = {
  title: 'Exemplo/ButtonMui',
  component: ButtonMui,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonMui>;

export const Padrao: Story = {
  args: {
    label: 'Clique aqui',
    color: 'success',
    variant: 'contained',
  },
};
