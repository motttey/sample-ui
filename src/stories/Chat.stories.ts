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
  title: 'Chat',
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


const chat1Arg = {
  title: '地元 アホ',
  messageList: [
    {
      text: 'おいハンバーグ! 👊',
      sender: 'bot',
      hasImage: true,
    },
    {
      text: '最近お前地元で見ねーけど何してるん？ 笑',
      sender: 'bot',
      hasImage: false,
    },
    {
      text: '今週末パイゼで集合な笑',
      sender: 'bot',
      hasImage: false,
    },
  ],
  senderImgUrl: "https://placehold.jp/3d4070/ffffff/150x150.png?text=%20",
  receiverImgUrl: "https://placehold.jp/999999/ffffff/150x150.png?text=%20",
}

const chat2Arg = {
  title: '地元 アホ',
  messageList: [
    {
      text: 'おひさ！同窓会でもオマエの話題でてたわ笑',
      sender: 'bot',
      hasImage: true,
    },
    {
      text: '6月6日に地元メンツでBBQすっから、今回は顔出せよ～！',
      sender: 'bot',
      hasImage: false,
    },
    {
      text: 'マジ来なかったら後悔するぞ👊👊👊',
      sender: 'bot',
      hasImage: false,
    },
  ],
  senderImgUrl: "https://placehold.jp/3d4070/ffffff/150x150.png?text=%20",
  receiverImgUrl: "https://placehold.jp/999999/ffffff/150x150.png?text=%20",
}


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    ...defaultArgs,
  },
};

export const Chat1_1 = {
  args: {
    ...chat1Arg,
  },
};


export const Chat1_2 = {
  args: {
    ...chat1Arg,
    messageList: [
      ...chat1Arg.messageList,
      {
        text: '行きません',
        sender: 'user',
        hasImage: true,
      }
    ],
  },
};

export const Chat2_1 = {
  args: {
    ...chat2Arg,
  },
};


export const Chat2_2 = {
  args: {
    ...chat2Arg,
    messageList: [
      ...chat2Arg.messageList,
      {
        text: '行きます...',
        sender: 'user',
        hasImage: true,
      }
    ]
  },
};
