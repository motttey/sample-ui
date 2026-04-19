import SnsPhotoPost from './SnsPhotoPost';
import { Meta } from '@storybook/react-vite';

const meta: Meta<typeof SnsPhotoPost> = {
  title: 'Example/SnsPhotoPost',
  component: SnsPhotoPost,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const defaultArgs = {
  username: 'ジャンヌ Official',
  userHandle: '@jeanne_official',
  postStrList: ['ときにはジャンクの極致に触れ、', '自らの高潔さを知る。'],
  timeStampStr: '午後3:04・ 2002年3月9日',
  avatarSrcUrl: '/kedarugianne.png',
  photoSrcUrl: '/jannunokyokuti.png',
  replyCount: 22,
  repostCount: 2002,
  likeCount: '3.9万',
  bookmarkCount: 2002,
};

export const Default = {
  args: {
    ...defaultArgs,
  },
};
