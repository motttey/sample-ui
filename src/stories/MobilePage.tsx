import React from 'react';

import styles from './MobilePage.module.css';

interface Props {
    visited: number
}

const MobilePage = ({visited}: Props) => {
    return (
        <div className={styles.container}>
            <header>
            <img
                src="https://pbs.twimg.com/media/GYpujm4bUAAXyFq?format=jpg&name=large"
                alt="ヘッダーイメージ"
                className={styles.headerImage}
            />
            </header>

            <main>
            <p className={styles.apologyMessage}>
                更新が滞ってしまい申し訳ありませんでした。・゜・(ノД`)
            </p>
            <p className={styles.updateInfo}>hogehoge</p>
            </main>

            <nav>
            <a href="#">1st</a> | <a href="#">main</a> | <a href="#">BBS</a>
            </nav>

            <footer>
            <p className={styles.visitorCount}>貴方は{visited}人目の被験者......</p>
            </footer>
        </div>
    );
}

export default MobilePage;
