import React from 'react';

import styles from './MobilePage.module.css';

interface Props {
    visited: number
}

interface Restaurant {
    name: string
    location: string
}

const restaurants = [
    { name: "LAND", location: "目黒" },
    { name: "バルピパル", location: "西小山" },
    { name: "ナンディニ", location: "虎ノ門" },
    { name: "ボンディ", location: "神保町" },
    { name: "ニルワナム", location: "神谷町" },
    { name: "スパイスカレー食堂", location: "五反田" },
    { name: "AHIRIYA", location: "代々木" },
    { name: "東印度カレー商会", location: "不動前" },
    { name: "ボタニカリー", location: "大阪本町" },
    { name: "ナイアガラ", location: "祐天寺" }
];

const RestaurantList = (restaurants: Array<Restaurant>) => {
    return (
        <ul>
            {restaurants.map((restaurant, index) => (
                <li key={index}>
                    ☆{restaurant.name}☆ ({restaurant.location})
                </li>
            ))}
        </ul>
    );
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
                <p className={styles.title}>††望月田吾作 闇のあとがき††</p>
                <img
                    src="https://pbs.twimg.com/media/GYpujm4bUAAXyFq?format=jpg&name=large"
                    alt="ヘッダーイメージ"
                    className={styles.headerImage}
                />
            </header>
            
            <div className={styles.counterContainer}>
                {VisitorCounter(visited)}
            </div>

            <main>
            <p className={styles.message}>
                ★★★ おすすめカレー'24 ★★★
            </p>
            {RestaurantList(restaurants)}
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
