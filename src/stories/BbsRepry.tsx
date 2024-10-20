import React from 'react';
import styles from './BbsRepry.module.css';

const Reply = ({ showThreadTitle = false, threadTitle = '' }) => {
  return (
    <div className={styles.replyContainer}>
      {showThreadTitle && (
        <div className={styles.threadTitle}>
          <h2>{threadTitle}</h2>
        </div>
      )}

      <div className={styles.header}>
        <span className={styles.replyNumber}>0011</span>
        <span className={styles.userInfo}>
          名も無き決闘者 警備員[Lv.89] (アッチョ1W 3baa-kfr1 [2200:2410:d340:1500:*])
        </span>
        <span className={styles.timestamp}>2024/10/20(日) 13:35:12.64</span>
        <span className={styles.board}>垣版 | 大砲</span>
      </div>

      <div className={styles.content}>
        <div className={styles.reference}>
          <span className={styles.referenceNumber}>&gt;&gt;4</span>
        </div>
        <p>レスレスレスレス</p>
      </div>

      <div className={styles.footer}>
        <span className={styles.userID}>ID:Txxxxxxx0(1/8)</span>
      </div>
    </div>
  );
};

export default Reply;
