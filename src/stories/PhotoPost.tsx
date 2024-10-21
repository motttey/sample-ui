import React from 'react';
import styles from './PhotoPost.module.css';

interface Props {
    userName: string
    avatarImageUrl: string
    postImageUrl: string,
    likeUser: string,
    likeUserNum: number,
    postTimeStampStr: string
}

const PhotoPost = ({
    userName,
    avatarImageUrl = "https://motttey.github.io/doraemon-namecard.webp",
    postImageUrl,
    likeUser,
    likeUserNum,
    postTimeStampStr
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src={avatarImageUrl}
          alt="user avatar"
          className={styles.avatar}
        />
        <span className={styles.username}>{userName}</span>
        <span className={styles.moreOptions}>...</span>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={postImageUrl}
          alt="post"
          className={styles.postImage}
        />
      </div>
      <div className={styles.postActions}>
        <div className={styles.actionButtons}>
          <button className={styles.likeButton}>♡</button>
          <button className={styles.commentButton}>💬</button>
        </div>
      </div>
      <div className={styles.postInfo}>
        <p className={styles.likes}>
          {likeUser}、他{likeUserNum}人が「いいね！」しました
        </p>
        <p className={styles.date}>{postTimeStampStr}</p>
      </div>
    </div>
  );
};

export default PhotoPost;
