import BbsRepry from './BbsRepry';
import { Meta } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof BbsRepry> = {
  title: 'Example/BbsRepry',
  component: BbsRepry,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;

const defaultArgs = {
  repryNumber: '0011',
  userName: '名も無き決闘者 警備員[Lv.99] (アッチョ1W 3abc-kfr1',
  timeStampStr: '2024/10/20(日) 13:35:12.64',
  responseStrList: ['レスレスレスレス', 'レスレスレス'],
  userId: 'Txxxxxxx0',
  anchor: 5
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: defaultArgs
};

export const WithThreadTitle = {
  args: {
    ...defaultArgs,
    showThreadTitle: true,
    threadTitle: 'スレタイスレタイスレタイ',
  },
};
