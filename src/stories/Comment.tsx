import React from 'react';
import styles from './Comment.module.css';

const Comment = () => {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.header}>
        <img 
          src="https://motttey.github.io/doraemon-namecard.webp" 
          alt="User avatar" 
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <span className={styles.username}>user*******</span>
          <span className={styles.timestamp}>16分前</span>
        </div>
      </div>

      <div className={styles.content}>
        <p>
          テストコメントテストコメント
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
