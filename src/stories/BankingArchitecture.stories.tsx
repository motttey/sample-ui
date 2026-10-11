import type { Meta, StoryObj } from '@storybook/react-vite'
import BankingArchitecture from './BankingArchitecture'

const meta = {
  title: 'Pages/BankingArchitecture',
  component: BankingArchitecture,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BankingArchitecture>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
