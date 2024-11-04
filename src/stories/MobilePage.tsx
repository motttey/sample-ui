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
                <p>††望月田吾作の闇のあとがき††</p>
                <img
                    src="https://pbs.twimg.com/media/GYpujm4bUAAXyFq?format=jpg&name=large"
                    alt="ヘッダーイメージ"
                    className={styles.headerImage}
                />
            </header>

            <main>
            <p className={styles.message}>
                ★★★ 望月田吾作 おすすめイタリアン'24 ★★★
            </p>
            <p className={styles.updateInfo}>hogehoge</p>
            </main>

            <nav>
                <a href="#">自己紹介</a> | <a href="#">イラスト</a> | <a href="#">掲示板</a> | <a href="#">絵茶</a>
            </nav>

            <footer>
                {VisitorCounter(visited)}
            </footer>
        </div>
    );
}

export default MobilePage;
