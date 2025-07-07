import BbsRepry from './BbsRepry';
import { Meta } from '@storybook/react-vite';

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

const sampleArgs1 = {
  repryNumber: '0023',
  userName: '餅食えば名無し 警備員[Lv.99]',
  timeStampStr: '2024/03/14(日) 13:35:12.64',
  responseStrList: ['最近の若者は酒も飲まないし車も買わない。金を使わないから経済が回らないんだよ。昔はもっとみんな遊びも仕事も全力だった。'],
  userId: 'Txxhogex0',
}

const sampleArg1 = {
  repryNumber: '0099',
  userName: '餅食えば名無し しごでき会社員[Lv.45]',
  timeStampStr: '2024/04/33(金) 12:34:56:78',
  responseStrList: ['簡単な資料作成を頼んでも、指示の意図を全然理解できないし、修正したら逆ギレ気味。', '『これやっといて』って言っても、『どうやってやるんですか？』って聞いてくるだけならまだいいけど、こっちが説明してる間にスマホいじってんのはなんなんだよ。'],
  anchor: 45,
  userId: 'Fushianasaxxx',
}

const sampleArg2 = {
  repryNumber: '0998',
  userName: '餅食えば名無し 吟遊詩人[Lv.24]',
  timeStampStr: '2024/33/04(木) 12:34:56:78',
  responseStrList: ['正社員、正直もう時代遅れじゃね？フリーランスや派遣の方が効率いいだろ。まだネリマブロックで消耗してるの？w'],
  anchor: 855,
  userId: 'nomadomado',
}

const sampleArg3 = {
  repryNumber: '0718',
  userName: '餅食えば名無し 餅屋[Lv.24]',
  timeStampStr: '2024/07/18(木) 12:34:56:78',
  responseStrList: ['望チー月さんイライラで草'],
  anchor: 1,
  userId: 'antimottey1234',
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

export const WithThreadTitle2 = {
  args: {
    ...sampleArgs1,
    showThreadTitle: true,
    threadTitle: '【悲報】やきとり世代さん、車を知らない',
  },
};

export const SampleThread1 = {
  args: sampleArg1
};

export const SampleThread2 = {
  args: sampleArg2
};

export const SampleThread3 = {
  args: sampleArg3
};
