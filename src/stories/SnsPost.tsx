import React from 'react';
import styles from './SnsPost.module.css';

interface Props {
    username: string,
    userHandle: string,
    postStrList: Array<string>,
    timeStampStr: string
    impsStr: string,
    imageSrcUrl?: string
}

const SnsPost = ({
    username,
    userHandle,
    timeStampStr,
    postStrList,
    impsStr,
    imageSrcUrl = "https://motttey.github.io/doraemon-namecard.webp"
}: Props) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.header}>
        <img 
          src={imageSrcUrl} 
          alt="Profile" 
          className={styles.profileImage} 
        />
        <div className={styles.userInfo}>
          <span className={styles.username}>{username}</span>
          <span className={styles.userHandle}>{userHandle}</span>
        </div>
      </div>

      <div className={styles.content}>
        <p>
          {postStrList.map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>

      <div className={styles.footer}>
        <span>{timeStampStr}</span> <span className={styles.views}>{impsStr}</span>
      </div>
    </div>
  );
};

export default SnsPost;
