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

const sampleArgs1 = {
  username: 'unko*******',
  userHandle: '@unknownunko',
  timeStampStr: '午後3:34 ・ 2005年10月22日',
  impsStr: '334334 件の表示',
  postStrList: ['また来たよ『タダで描いてくれませんか？』系のDM。スキルを軽視する人間はインターネット禁止にしてほしい。'],
  imageSrcUrl: "https://placehold.jp/3d4070/ffffff/150x150.png?text=%20",
}

const sampleArgs2 = {
  username: '田島ともあき',
  userHandle: '@tjmtomoaki',
  timeStampStr: '午後8:12 ・ 2024年8月12日',
  impsStr: '11002 件の表示',
  postStrList: ['『北海道観光は1日で回れる』って言う人、本州で言うと東京から大阪まで歩いて観光するくらいの距離なんだけど…。試される大地のクソデカさ"をナメないでくださーい。'],
  imageSrcUrl: "https://placehold.jp/3d4070/ffffff/150x150.png?text=%20",
}

const sampleArgs3 = {
  username: 'AIびっくりブラザーズ',
  userHandle: '@ai_bikkuri_brothers',
  timeStampStr: '午後4:02・ 2042年4月2日',
  impsStr: '42424242 件の表示',
  postStrList: ['AIに取って代わられる仕事が増えつつある中で、『自分には関係ない』と安心している方がいまだに見受けられます。果たしてその安心は、現実に裏付けされたものなのでしょうか❓', 'リスクを取らない選択が、最も大きなリスクになることを忘れてはいけません。', '', 'AI時代の「賢い生き方」は僕の固定ツイートへ☝️'],
  imageSrcUrl: "https://placehold.jp/3d4070/ffffff/150x150.png?text=%20",
}

const sampleArgs4 = {
  username: 'ワナビー',
  userHandle: '@wannabe_a_biggest_dreamer',
  timeStampStr: '午後0:01・ 2025年1月1日',
  impsStr: '1111111 件の表示',
  postStrList: ['テレビで『フォロワー500がインフルエンサーの基準！』って言われてたけど、ネット民からしたら多いのか少ないのか微妙なラインだな〜 俺5000人いるけど有名人じゃないし笑'],
  imageSrcUrl: "https://placehold.jp/3d4070/ffffff/150x150.png?text=%20",
}

const sampleArgs5 = {
  username: 'のびのびパパ',
  userHandle: '@nobinobi_father',
  timeStampStr: '午後0:01・ 2026年8月7日',
  impsStr: '8070 件の表示',
  postStrList: ['うちの子の小学校で理不尽なバツが出た。問題は『袋に3つ入ったりんごを、4袋買ったらいくつになるでしょう』だったんだけど、子どもは『4×3』と書いたらバツ。掛け算の順序を厳密に守るのがこの国だけって聞いたことあるし、他に教えるべきことがあるんじゃないかと思う。'],
  imageSrcUrl: "https://placehold.jp/999999/ffffff/150x150.png?text=%20",
}

const sampleArgs6 = {
  username: 'マンドリンヒーロー',
  userHandle: '@my_post_my_hero',
  timeStampStr: '午前3:34・ 2028年12月25日',
  impsStr: '555555 件の表示',
  postStrList: ['電車で席を譲らずスマホを大音量で使ってたヤツに注意したら、周りの乗客全員が拍手してくれて、最後には車内が大喝采になった。思わずビックリ。'],
  imageSrcUrl: "https://placehold.jp/999999/ffffff/150x150.png?text=%20",
}

const sampleArgs7 = {
  username: '音楽',
  userHandle: '@piano_nobotttey',
  timeStampStr: '午前0:00・ 2024年2月19日',
  impsStr: '1983 件の表示',
  postStrList: ['みんなが聴いてるヒット曲、正直どれも同じに聞こえる。昔の天才たちが創った音楽の方が何倍も洗練されてる。'],
  imageSrcUrl: "https://placehold.jp/999999/ffffff/150x150.png?text=%20",
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    ...defaultArgs
  },
};

export const SampleArgs1 = {
  args: {
    ...sampleArgs1
  },
};

export const SampleArgs2 = {
  args: {
    ...sampleArgs2
  },
};

export const SampleArgs3 = {
  args: {
    ...sampleArgs3
  },
};

export const SampleArgs4 = {
  args: {
    ...sampleArgs4
  },
};

export const SampleArgs5 = {
  args: {
    ...sampleArgs5
  },
};

export const SampleArgs6 = {
  args: {
    ...sampleArgs6
  },
};

export const SampleArgs7 = {
  args: {
    ...sampleArgs7
  },
};
