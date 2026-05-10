import LabIntroduction from './LabIntroduction';
import { Meta } from '@storybook/react-vite';

const meta: Meta<typeof LabIntroduction> = {
  title: 'Example/LabIntroduction',
  component: LabIntroduction,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const defaultArgs = {
  labName: '知能情報システム研究室',
  professor: {
    name: '望月 田吾作',
    title: '教授 / 博士（情報科学）',
    bio: '機械学習、ヒューマンコンピュータインタラクション、社会実装型AIを専門とし、産学連携プロジェクトを多数推進しています。学生一人ひとりの問いを尊重し、基礎研究から応用開発まで丁寧に指導します。',
    avatarSrcUrl: '/doraicon.png',
  },
  department: '情報工学部 知能情報学科',
  researchThemes: ['人工知能', '自然言語処理', 'Human-Centered AI', 'データ可視化'],
  message: '私たちは、技術の新規性だけでなく、社会にとって誠実で持続可能な研究であることを重視しています。知的好奇心を起点に、世界へ届く研究成果を共に生み出しましょう。',
};

const manyThemesArgs = {
  labName: '先端メディアデザイン研究室',
  professor: {
    name: '源 静香',
    title: '准教授 / Ph.D. in Media Design',
    bio: 'メディア表現、教育工学、アクセシビリティデザインの横断領域を扱っています。プロトタイピングとユーザー調査を往復しながら、人の学びと創造性を拡張する仕組みを探究しています。',
    avatarSrcUrl: '/doraicon.png',
  },
  department: 'デザイン工学部 メディアデザイン学科',
  researchThemes: ['UX Research', '教育工学', 'アクセシビリティ', 'Creative Coding', 'AR/VR', '情報デザイン', 'プロトタイピング'],
  message: '異なる専門性を持つメンバーが互いに刺激し合い、実験と検証を重ねながら、人に寄り添うメディアの未来を構想しています。',
};

const longMessageArgs = {
  labName: '環境都市データサイエンス研究室',
  professor: {
    name: '野比 のび太',
    title: '教授 / 都市環境学博士',
    bio: '都市データ解析、環境シミュレーション、地域計画を専門としています。行政・企業・市民と連携し、研究成果を実社会の意思決定につなげることを目指しています。',
  },
  department: '環境理工学部 都市環境学科',
  researchThemes: ['スマートシティ', '環境シミュレーション', 'GIS', '交通データ解析', '地域計画'],
  message: '研究室では、都市を単なるデータの集合ではなく、人々の生活と記憶が重なり合う場として捉えています。観測、分析、対話を丁寧に積み重ねることで、未来の都市が抱える課題を早期に発見し、より良い選択肢を社会へ提示することを大切にしています。',
};

const fsArgs = {
  labName: 'ロボット工学研究室',
  professor: {
    name: '春島 寧',
    title: '助教授 / 博士 (知能情報工学)',
    bio: '人間とロボットの対話システム、知能ロボット、IoT (Internet of Things) を専門としています。実験的なプロトタイピングとフィールドワークを通じて、人とロボットが共生する未来の社会を探求しています。',
    avatarSrcUrl: '/harushima_photo.webp',
  },
  department: '工学部 知能情報工学科',
  researchThemes: ['知能ロボット', 'Human-AI interaction', '対話システム', 'IoT', 'ワープ航法'],
  message: '私たちの研究室では、ロボットを単なる機械としてではなく、人と共に生活し、学び合う存在として捉えています。技術的な挑戦だけでなく、倫理的な側面や社会的な影響も考慮しながら、未来のロボット社会を共に創造していきましょう。アットホームな研究室です。',
};

export const Default = {
  args: {
    ...defaultArgs,
  },
};

export const ManyThemes = {
  args: {
    ...manyThemesArgs,
  },
};

export const LongMessage = {
  args: {
    ...longMessageArgs,
  },
};

export const FS = {
  args: {
    ...fsArgs,
  },
};
