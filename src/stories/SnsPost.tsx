import React from 'react';
import styles from './SnsPost.module.css';

const SnsPost = () => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.header}>
        <img 
          src="https://motttey.github.io/doraemon-namecard.webp" 
          alt="Profile" 
          className={styles.profileImage} 
        />
        <div className={styles.userInfo}>
          <span className={styles.username}>望月田吾作</span>
          <span className={styles.userHandle}>@mt_tg</span>
        </div>
      </div>

      <div className={styles.content}>
        <p>テストテキスト</p>
      </div>

      <div className={styles.footer}>
        <span>午後4:32 ・ 2024年10月19日 ・ </span>
        <span className={styles.views}>493 件の表示</span>
      </div>
    
    {/*
      <div className={styles.actions}>
        <button className={styles.iconButton}>🔁</button>
        <button className={styles.iconButton}>❤️</button>
        <button className={styles.iconButton}>🔖</button>
      </div>
    */}
    </div>
  );
};

export default SnsPost;
