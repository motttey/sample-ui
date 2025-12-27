import React, { useState } from 'react';
import styles from "./NewsWithAd.module.css";

interface Props {
    adImageUrl?: string;
}

const NewsWithAd = ({
    adImageUrl= "https://placehold.jp/ff0000/ffffff/400x300.png?text=%E8%84%82%E8%82%AA%E3%81%8C%E3%83%89%E3%83%90%E3%83%83%EF%BC%81%EF%BC%9F",
}: Props) => {
  const [showAd, setShowAd] = useState(true);

  const handleCloseAd = () => {
    setShowAd(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <h1>新世界ニュース</h1>
          <div className={styles.searchBar}>ドラ焼き 検索</div>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.active}>主要</li>
            <li>道具</li>
            <li>経済</li>
            <li>ネズミ</li>
          </ul>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.topNews}>
          <div className={styles.mainArticle}>
            <div className={styles.articleImage}>
                <div className={styles.placeholderImg}>【速報】特大どら焼き、全店で増量決定</div>
            </div>
            <h2>どら焼きの「皮」を200%増量へ。全国のネコ型ロボットから歓喜の声</h2>
            <p className={styles.summary}>
              22世紀最大のどら焼きチェーン「望月」は25日、主力商品のどら焼きの皮を大幅に増量すると発表した。この発表を受け、市場ではどら焼き先物価格が急騰している...
            </p>
          </div>
          
          <aside className={styles.sidebar}>
            <h3>アクセスランキング</h3>
            <ol>
              <li><span>1</span> ネズミ、ついに絶滅危惧種に指定</li>
              <li><span>2</span> 「どこでもドア」の渋滞、空き地付近で発生</li>
              <li><span>3</span> 四次元ポケットの整理術が話題に</li>
              <li><span>4</span> 押し入れの結露対策、決定版はこれ</li>
            </ol>
          </aside>
        </div>
      </main>

      {showAd && (
        <div className={styles.adOverlay}>
          <div className={styles.adModal}>
            <button className={styles.closeButton} onClick={handleCloseAd}>
              ×
            </button>
            <div className={styles.adLabel}>PR</div>
            <div className={styles.adContent}>
              <div className={styles.adWarning}>【閲覧注意】</div>
              <h4 className={styles.adTitle}>まだ普通の「どら焼き」食べてるの？</h4>
                <div className={styles.adImageWrapper}>
                <img 
                  src={adImageUrl}
                  alt="怪しいダイエット広告" 
                  className={styles.adImage}
                />
              </div>
              <p className={styles.adDescription}>
                「1日100個食べても太らない！？」「脂肪がドバッと」22世紀の最新バイオ技術を凝縮した魔法の粒。今なら実質0円！
              </p>
              <button className={styles.adCta}>公式サイトで詳しく見る＞</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsWithAd;
