import NewsWithAd from './NewsWithAd';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NewsWithAd> = {
  title: 'Pages/NewsWithAd',
  component: NewsWithAd,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof NewsWithAd>;

export const Default: Story = {
    args: {
        adImageUrl:  "ad_dorayaki.png",
    }
};
