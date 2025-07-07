import Comment from './Comment';
import { Meta } from '@storybook/react-vite';

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

const sampleArgs1 = {
  userId: 'afukomemin*******',
  timeStampStr: '30分前',
  commentStrList: ['SNSのフォロワー数が重要視される時代なんですね。', '中身より数字ばかり追いかける社会の浅はかさには呆れます。'],
  repryNum: 10,
  imageSrcUrl: "https://placehold.jp/999999/ffffff/150x150.png?text=%20",
}


const sampleArgs2 = {
  userId: 'kinoko*******',
  timeStampStr: '1日前',
  commentStrList: ['私はきのこ派でもたけのこ派でもない普通のX国人ですが、正直言って不快です。', 'こういうのって、きのこ派を褒めてるようで実は馬鹿にしてますよね？分断を煽るような議論は控えるべきだと思います。'],
  repryNum: 96,
  kyokan: 100,
  naruhodo: 108,
  uuum: 801,
  imageSrcUrl: "https://placehold.jp/999999/ffffff/150x150.png?text=%20",
}

const sampleArgs3 = {
  userId: 'gesewa*******',
  timeStampStr: '1日前',
  commentStrList: ['正直、私はこの方に興味がないので、なぜこんなにも頻繁にニュースになるのか不思議でなりません。確かにブランド品を身にまとっているのは分かりますが、それが似合っているかと言われると微妙ですし、彼女のニュースの大半が服やブランドの話題ばかりで、内面的な魅力や功績が取り上げられることがほとんどないのが気になります。結局、本人の魅力が備わっていなければ単なる高価な物の宣伝にしか見えませんし、見る側としては少し空虚に感じますね。'],
  repryNum: 1987,
  kyokan: 831,
  naruhodo: 1970,
  uuum: 414,
  imageSrcUrl: "https://placehold.jp/999999/ffffff/150x150.png?text=%20",
}

const sampleArgs4 = {
  userId: 'erai*******',
  timeStampStr: '1日前',
  commentStrList: [
    'SNSでの愚行を見るたびに、若者のモラルの低下がX国を滅ぼすのではないかと危惧します。',
    '親や教師も甘くなり、叱らない教育のせいで子どもたちは責任感も羞恥心もなくなってしまったのでしょう。',
    'こういう人たちが国の未来を担うと思うと、正直絶望しかありません。'
  ],
  repryNum: 1984,
  kyokan: 1964,
  naruhodo: 1970,
  uuum: 2020,
  imageSrcUrl: "https://placehold.jp/3d4070/ffffff/150x150.png?text=%20",
}

const sampelArgs5 = {
  userId: 'kibisii*******',
  timeStampStr: '2日前',
  commentStrList: [
    'こんなことがニュースになるなんて平和な国ですね。'
  ],
  repryNum: 1,
  kyokan: 0,
  naruhodo: 0,
  uuum: 1,
  imageSrcUrl: "https://placehold.jp/3d4070/ffffff/150x150.png?text=%20",
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    ...defaultArgs,
  },
};

export const SampleArgs1 = {
  args: {
    ...sampleArgs1,
  },
};

export const SampleArgs2 = {
  args: {
    ...sampleArgs2,
  },
};

export const SampleArgs3 = {
  args: {
    ...sampleArgs3,
  },
};

export const SampleArgs4 = {
  args: {
    ...sampleArgs4,
  },
};

export const SampleArgs5 = {
  args: {
    ...sampelArgs5,
  },
};
