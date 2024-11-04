import React from 'react';

import styles from './MobilePage.module.css';

interface Props {
    visited: number
}

const VisitorCounter = (visited: number) => {
    // `visited`が「1234」のような数値と仮定し、文字列に変換して1文字ずつ分割
    const countChars = visited.toString().split('');
  
    return (
      <p className={styles.visitorCount}>
        貴方は
        {countChars.map((char, index) => (
          <span key={index} className={styles.counterChar}>
            {char}
          </span>
        ))}
        人目の被験者......
      </p>
    );
};

const MobilePage = ({visited}: Props) => {
    return (
        <div className={styles.container}>
            <header>
                <p className={styles.title}>††望月田吾作の闇のあとがき††</p>
                <img
                    src="https://pbs.twimg.com/media/GYpujm4bUAAXyFq?format=jpg&name=large"
                    alt="ヘッダーイメージ"
                    className={styles.headerImage}
                />
            </header>
            {VisitorCounter(visited)}

            <main>
            <p className={styles.message}>
                ★★★ おすすめカレー'24 ★★★
            </p>
            <ul>
                <li>☆LAND☆ (目黒)</li>
                <li>☆バルピパル☆ (西小山)</li>
                <li>☆ナンディニ☆ (虎ノ門)</li>
                <li>☆ボンディ☆ (神保町)</li>
                <li>☆ニルワナム☆ (神谷町)</li>
                <li>☆スパイスカレー食堂☆ (五反田)</li>
                <li>☆欧風カレー工房 すぷーん☆ (国分寺)</li>
                <li>☆東印度カレー商会☆ (不動前)</li>
                <li>☆ボタニカリー☆ (大阪本町)</li>
                <li>☆ナイアガラ☆ (祐天寺)</li>
            </ul>
            <p className={styles.updateInfo}>
                更新日: 2024.12.30
            </p>
            </main>

            <nav>
                <a href="#">自己紹介</a> | <a href="#">イラスト</a> | <a href="#">掲示板</a> | <a href="#">絵茶</a>
            </nav>

            <footer>
                <p><a>魔法のdランド</a></p>
                <p>(C)望月田吾作 ※無断転載禁止</p>
            </footer>
        </div>
    );
}

export default MobilePage;
