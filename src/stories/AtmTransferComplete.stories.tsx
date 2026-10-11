import type { Meta, StoryObj } from '@storybook/react-vite'
import AtmTransferComplete from './AtmTransferComplete'

const meta = {
  title: 'Pages/AtmTransferComplete',
  component: AtmTransferComplete,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AtmTransferComplete>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
