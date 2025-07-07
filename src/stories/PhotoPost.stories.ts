import PhotoPost from './PhotoPost';
import { Meta } from '@storybook/react-vite';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof PhotoPost> = {
  title: 'Example/PhotoPost',
  component: PhotoPost,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;

const defaultArgs = {
  userName: 'mottttey',
  likeUser: 'nobita_nobio',
  likeUserNum: 24,
  postTimeStampStr: '2112年9月3日',
  postImageUrl:  "https://motttey.github.io/dora2024.webp",
}

const sampleArgs = {
  userName: 'nekory_men',
  likeUser: 'saruta_kichiku',
  likeUserNum: 2222,
  postTimeStampStr: '2022年2月2日',
  postImageUrl:  "/neko_rimen.png",
  avatarImageUrl:  "/neko_rimen.png",
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    ...defaultArgs
  },
};

export const SampleArgs = {
  args: {
    ...sampleArgs
  },
};
