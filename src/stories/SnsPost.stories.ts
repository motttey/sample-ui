import SnsPost from './SnsPost';
import { Meta } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof SnsPost> = {
  title: 'Example/SnsPost',
  component: SnsPost,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;

const defaultArgs = {
  username: '望月*******',
  userHandle: '@mt_tg',
  timeStampStr: '午後4:32 ・ 2024年10月19日',
  impsStr: '999 件の表示',
  postStrList: ['テストコメント', 'テストテストテストコメント'],
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    ...defaultArgs
  },
};
