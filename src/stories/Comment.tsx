import React from 'react';
import styles from './Comment.module.css';

interface Props {
    userId: string,
    timeStampStr: string
    imageSrcUrl?: string
    commentStrList: Array<string>
}

const Comment = ({
    userId,
    timeStampStr,
    commentStrList,
    imageSrcUrl = "https://motttey.github.io/doraemon-namecard.webp"
}: Props) => {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.header}>
        <img 
          src={imageSrcUrl}
          alt="User avatar" 
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <span className={styles.username}>{userId}</span>
          <span className={styles.timestamp}>{timeStampStr}</span>
        </div>
      </div>

      <div className={styles.content}>
        <p>
            {commentStrList.map((line, index) => (
                <span key={index}>
                    {line}
                    <br />
                </span>
            ))}
        </p>
      </div>

      <div className={styles.footer}>
        <button className={styles.repliesButton}>返信 0件</button>
        <div className={styles.reactions}>
          <span className={styles.reaction}>共感した 8</span>
          <span className={styles.reaction}>なるほど 2</span>
          <span className={styles.reaction}>うーん 7</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
