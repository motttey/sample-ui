import React, { useState } from 'react';
import styles from "./Chat.module.css";

interface MessageType {
    text: string,
    sender: string
}

const Chat = () => {
  const [messages, setMessages] = useState<Array<MessageType>>([]);
  const [input, setInput] = useState<string>('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        text: input,
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      setInput('');

      // 仮のボットレスポンス
      setTimeout(() => {
        const botMessage = {
          text: 'これは自動応答です。',
          sender: 'bot',
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
            <div
              className={`${styles.message} ${
                message.sender === 'user'
                  ? styles.userMessage
                  : styles.botMessage
              }`}
            >
              {message.text}
            </div>
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
