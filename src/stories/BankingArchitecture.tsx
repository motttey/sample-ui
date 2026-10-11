import React from 'react'
import styles from './BankingArchitecture.module.css'

function BankingArchitecture() {
  return (
    <div className={styles.page}>
      <main className={styles.canvas}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 740"
          role="img"
          aria-labelledby="banking-title banking-desc"
        >
          <title id="banking-title">ATMからキャッシュレスへ</title>
          <desc id="banking-desc">
            As-Isは自前ATMと現金の補充・管理。To-Beはスマホ決済とサービスの改善。設備の維持からサービスの充実へ資源を移す、4要素の概念図。
          </desc>
          <defs>
            <marker id="banking-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0 0L8 4L0 8Z" fill="#111" />
            </marker>
            <g id="banking-atm" className={styles.line}>
              <rect x="-36" y="-46" width="72" height="92" />
              <rect x="-23" y="-32" width="46" height="30" />
              <path d="M-22 11h14m8 0h14m-36 11h14m8 0h14M-20 34h40" />
            </g>
            <g id="banking-phone" className={styles.line}>
              <rect x="-29" y="-48" width="58" height="96" rx="6" />
              <path d="M-12-36h24M-9 35h18M-15 0l11 11L18-13" />
            </g>
            <g id="banking-cash" className={styles.line}>
              <rect x="-45" y="-29" width="78" height="45" />
              <path d="M-33 26h78v-43M-23 36h78V-7" />
              <circle cx="-6" cy="-7" r="12" />
              <path d="M-32-7h6m40 0h6" />
            </g>
            <g id="banking-growth" className={styles.line}>
              <path d="M-43 34V-30M-43 34h88M-27 19V7h14v12m13 0V-9h14v28m13 0v-43h14v43M-29-12l22-17 20 4 24-22" />
              <path d="M20-47h17v17" />
            </g>
          </defs>
          <rect width="1200" height="740" fill="white" />
          <text x="64" y="58" fontSize="13" fontWeight="700" letterSpacing="2.6">BANKING TRANSFORMATION</text>
          <text x="64" y="112" fontSize="36" fontWeight="700">ATMを廃止してキャッシュレスへ</text>
          <path d="M64 143H1136" stroke="#111" strokeWidth="3" />
          <text x="294" y="194" textAnchor="middle" fontSize="27" fontWeight="700">現状</text>
          <text x="906" y="194" textAnchor="middle" fontSize="27" fontWeight="700">移行後
          </text>
          <rect x="84" y="252" width="420" height="158" fill="#f2f2f2" stroke="#111" strokeWidth="3" />
          <use href="#banking-atm" transform="translate(163 331)" />
          <text x="230" y="330" className={styles.label}>自前ATM</text>
          <text x="230" y="360" className={styles.sub}>店舗で現金を引き出す</text>
          <path d="M294 421V457" stroke="#111" strokeWidth="3" markerEnd="url(#banking-arrow)" />
          <rect x="84" y="474" width="420" height="158" fill="white" stroke="#111" strokeWidth="3" />
          <use href="#banking-cash" transform="translate(163 553)" />
          <text x="230" y="550" className={styles.label}>現金の補充・管理</text>
          <text x="230" y="580" className={styles.sub}>設備と運用にコスト</text>

          <rect x="696" y="252" width="420" height="158" fill="#f2f2f2" stroke="#111" strokeWidth="3" />
          <use href="#banking-phone" transform="translate(775 331)" />
          <text x="842" y="330" className={styles.label}>スマホ決済</text>
          <text x="842" y="360" className={styles.sub}>手元で支払いが完結</text>
          <path d="M906 421V457" stroke="#111" strokeWidth="3" markerEnd="url(#banking-arrow)" />
          <rect x="696" y="474" width="420" height="158" fill="white" stroke="#111" strokeWidth="3" />
          <use href="#banking-growth" transform="translate(775 553)" />
          <text x="842" y="550" className={styles.label}>サービスの改善</text>
          <text x="842" y="580" className={styles.sub}>人と資金を集中</text>

          <path d="M543 330H649" stroke="#111" strokeWidth="4" markerEnd="url(#banking-arrow)" />
          <text x="600" y="301" textAnchor="middle" fontSize="15" fontWeight="700">ATMを撤去</text>
          <path d="M64 665H1136" stroke="#111" strokeWidth="2" />
          <text x="600" y="709" textAnchor="middle" fontSize="24" fontWeight="700">設備の維持から、サービスの充実へ。</text>
        </svg>
      </main>
    </div>
  )
}

export default BankingArchitecture
