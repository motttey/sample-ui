import type { Meta, StoryObj } from '@storybook/react-vite'
// @ts-expect-error FinanceInternship is a JSX module without a TypeScript declaration.
import FinanceInternship from './FinanceInternship'

const meta = {
  title: 'Pages/FinanceInternship',
  component: FinanceInternship,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FinanceInternship>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
