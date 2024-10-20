import { fn } from '@storybook/test';
import Chat from './Chat';
import { Meta } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Chat> = {
  title: 'Example/Chat',
  component: Chat,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
}

export default meta;

const defaultArgs = {
  messageList: [
    {
      text: 'こんにちは',
      sender: 'user',
      hasImage: true,
    },
    {
      text: 'ありがとう',
      sender: 'user',
      hasImage: false,
    },
    {
      text: 'さよなら',
      sender: 'user',
      hasImage: false,
    },
    {
      text: 'また会いましょう',
      sender: 'user',
      hasImage: false,
    }
  ],
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    ...defaultArgs,
  },
};
