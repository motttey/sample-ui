import React from 'react';
import styles from './Comment.module.css';

interface Props {
    userId: string,
    timeStampStr: string
    imageSrcUrl?: string
    repryNum?: number
    kyokan?: number
    naruhodo?: number
    uuum?: number
    commentStrList: Array<string>
}

const Comment = ({
    userId,
    timeStampStr,
    commentStrList,
    repryNum=0,
    kyokan=8,
    naruhodo=2,
    uuum=10,
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
        <button className={styles.repliesButton}>返信 {repryNum} 件</button>
        <div className={styles.reactions}>
          <span className={styles.reaction}>共感した {kyokan}</span>
          <span className={styles.reaction}>なるほど {naruhodo}</span>
          <span className={styles.reaction}>うーん {uuum}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
