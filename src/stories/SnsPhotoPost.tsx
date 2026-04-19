import React from 'react';
import styles from './SnsPhotoPost.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faComment, faHeart, faRetweet } from "@fortawesome/free-solid-svg-icons";

library.add(faComment, faHeart, faRetweet);

type CountLike = number | string;

interface Props {
  username: string;
  userHandle: string;
  postStrList: Array<string>;
  timeStampStr: string;
  avatarSrcUrl?: string;
  photoSrcUrl: string;
  replyCount?: CountLike;
  repostCount?: CountLike;
  likeCount?: CountLike;
  bookmarkCount?: CountLike;
}

const formatCount = (count: CountLike | undefined) => {
  if (count === undefined) return '';
  if (typeof count === 'string') return count;
  if (count >= 10000) {
    const man = Math.floor((count / 10000) * 10) / 10;
    return `${man}万`;
  }
  return count.toLocaleString();
};

const SnsPhotoPost = ({
  username,
  userHandle,
  postStrList,
  timeStampStr,
  avatarSrcUrl = 'https://placehold.jp/3d4070/ffffff/150x150.png?text=%20',
  photoSrcUrl,
  replyCount = 111,
  repostCount = 3850,
  likeCount = 19000,
  bookmarkCount = 2923,
}: Props) => {
  const reply = formatCount(replyCount);
  const repost = formatCount(repostCount);
  const like = formatCount(likeCount);
  const bookmark = formatCount(bookmarkCount);

  return (
    <div className={styles.postContainer}>
      <div className={styles.header}>
        <img src={avatarSrcUrl} alt="Profile" className={styles.profileImage} />
        <div className={styles.userInfo}>
          <span className={styles.username}>{username}</span>
          <span className={styles.userHandle}>{userHandle}</span>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.iconButton} aria-label="settings">
            ⚙
          </button>
          <button className={styles.iconButton} aria-label="more">
            …
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.text}>
          {postStrList.map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <img src={photoSrcUrl} alt="Post" className={styles.photo} />
      </div>

      <div className={styles.footer}>
        <span className={styles.timestamp}>{timeStampStr}</span>
      </div>

      <div className={styles.divider} />

      <div className={styles.actions}>
        <button className={styles.actionButton} aria-label="reply">
          <FontAwesomeIcon icon="comment"/>
          <span className={styles.actionCount}>{reply}</span>
        </button>
        <button className={styles.actionButton} aria-label="repost">
          <FontAwesomeIcon icon="retweet"/>
          <span className={styles.actionCount}>{repost}</span>
        </button>
        <button className={styles.actionButton} aria-label="like">
          <FontAwesomeIcon icon="heart"/>
          <span className={styles.actionCount}>{like}</span>
        </button>
      </div>
    </div>
  );
};

export default SnsPhotoPost;
