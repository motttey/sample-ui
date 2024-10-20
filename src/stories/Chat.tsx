import React, { useState } from 'react';
import styles from "./Chat.module.css";

interface Props {
  messageList: Array<MessageType>,
  senderImgUrl?: string,
  receiverImgUrl?: string
}

interface MessageType {
  text: string;
  sender: string;
  hasImage: boolean;
}

const Chat = ({
  messageList,
  senderImgUrl = "https://motttey.github.io/doraemon-namecard.webp",
  receiverImgUrl = "https://motttey.github.io/doraemon-namecard.webp",
}: Props) => {
  const [messages, setMessages] = useState<Array<MessageType>>(messageList);
  const [input, setInput] = useState<string>('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        text: input,
        sender: 'user',
        hasImage: true
      };
      setMessages([...messages, newMessage]);
      setInput('');

      // Simulate bot response
      setTimeout(() => {
        const botMessage = {
          text: 'これは自動応答です。',
          sender: 'bot',
          hasImage: true
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 1000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatHeader}>LINE風チャット</div>

      <div className={styles.chatBody}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.messageContainer} ${
              message.sender === 'user' ? styles.messageUser : styles.messageBot
            }`}
          >
            {message.sender !== 'user' && (
              <div className={styles.avatar}>
                {message.hasImage && (
                  <img
                    src={senderImgUrl}
                    alt="avatar"
                    className={`${styles.avatarImage} ${styles.imageReceiver}`}
                  />
                )}
              </div>
            )}
            <div
              className={`${styles.message} ${
                message.sender === 'user' ? styles.userMessage : styles.botMessage
              }`}
            >
              {message.text}
            </div>
            {message.sender === 'user' && (
              <div className={styles.avatar}>
                {message.hasImage && (
                  <img
                    src={receiverImgUrl}
                    alt="avatar"
                    className={`${styles.avatarImage} ${styles.imageSender}`}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.inputArea}>
        <input
          className={styles.inputField}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="メッセージを入力..."
        />
        <button className={styles.sendButton} onClick={handleSendMessage}>
          送信
        </button>
      </div>
    </div>
  );
};

export default Chat;
