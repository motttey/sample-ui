import React from 'react';
import styles from './BbsRepry.module.css';

interface Props {
    showThreadTitle: boolean,
    threadTitle: string,
    repryNumber: string,
    userName: string,
    timeStampStr: string,
    responseStrList: Array<string>,
    userId: string,
    anchor?: number 
}

const BbsReply = ({ 
    showThreadTitle = false,
    threadTitle = '',
    repryNumber,
    timeStampStr,
    userName,
    responseStrList,
    userId,
    anchor
}: Props) => {
  return (
    <div className={styles.replyContainer}>
      {showThreadTitle && (
        <div className={styles.threadTitle}>
          <h2>{threadTitle}</h2>
        </div>
      )}

      <div className={styles.header}>
        <span className={styles.replyNumber}>{repryNumber}</span>
        <span className={styles.userInfo}>
          {userName})
        </span>
        <span className={styles.timestamp}>{timeStampStr}</span>
      </div>

      <div className={styles.content}>
        {anchor && (
            <div className={styles.reference}>
                <span className={styles.referenceNumber}>&gt;&gt;{anchor}</span>
            </div>
        )}
        <p>
            {responseStrList.map((line, index) => (
                <span key={index}>
                {line}
                <br />
                </span>
            ))}
        </p>
      </div>

      <div className={styles.footer}>
        <span className={styles.userID}>ID:{userId}(1/8)</span>
      </div>
    </div>
  );
};

export default BbsReply;
