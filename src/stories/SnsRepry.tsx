import React from "react";
import styles from "./SnsRepry.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faComment, faHeart, faRetweet } from "@fortawesome/free-solid-svg-icons";

library.add(faComment, faHeart, faRetweet);

interface Props {
  userName: string
  userId: string
  text: string
  timeAgo: string
  imageSrcUrl?: string
}

const Post = ({ userName, userId, text, timeAgo, imageSrcUrl }: Props) => (
  <div className={styles.post}>
    <div className={styles.avatar}>
      <img 
        src={imageSrcUrl} 
        alt="Profile" 
        className={styles.profileImage} 
      />
    </div>
    <div className={styles.content}>
      <div className={styles.header}>
        <span className={styles.username}>{userName}</span>
        <span className={styles.handle}>@{userId}</span>
        <span className={styles.timeAgo}>{timeAgo}</span>
      </div>
      <p className={styles.text}>{text}</p>
      <div className={styles.actions}>
        <button className={styles.actionButton}>
          <FontAwesomeIcon icon="comment"/>1
        </button>
        <button className={styles.actionButton}>
          <FontAwesomeIcon icon="retweet"/>0
        </button>
        <button className={styles.actionButton}>
          <FontAwesomeIcon icon="heart"/>0
        </button>
        <button className={styles.actionButton}>...</button>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className={styles.container}>
      <Post
        userName="のび太"
        userId="nobi0807"
        timeAgo="1分"
        text="僕の顔、青いだろ"
        imageSrcUrl="nobiicon.png"
      />
      <Post
        userName="Suneo Honekawa"
        userId="suneo_the_rich"
        timeAgo="30秒"
        text="@dora ファクトチェックして"
        imageSrcUrl="suneicon.png"
      />
      <Post
        userName="Dora☑️"
        userId="dora"
        timeAgo="今"
        text={`青いというよりうすぎたない。けさも顔を洗わなかったな。`}
        imageSrcUrl="doraicon.png"
      />
    </div>
  );
};

export default App;
