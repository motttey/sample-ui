import Comment from './Comment';
import { Meta } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Comment> = {
  title: 'Example/Comment',
  component: Comment,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;

const defaultArgs = {
  userId: 'user*******',
  timeStampStr: '15分前',
  commentStrList: ['テストコメント', 'テストテストコメント'],
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    ...defaultArgs,
  },
};
