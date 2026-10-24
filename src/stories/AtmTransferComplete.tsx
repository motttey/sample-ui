import illustration from './assets/atm_character.png'
import fujikoBankMark from './assets/fujiko-bank-mark.svg'
import styles from './AtmTransferComplete.module.css'

function AtmTransferComplete() {
  return (
    <main className={styles.stage}>
      <div className={styles.machine}>
        <div className={styles.screen}>
          <header className={styles.header}>
            <div className={styles.brand} aria-label="フジコ銀行">
              <img className={styles.brandMark} src={fujikoBankMark} alt="" />
              <span>フジコ銀行</span>
            </div>
            <div className={styles.headerCenter}>お振込</div>
            <div className={styles.step}>お取引完了 <span>4 / 4</span></div>
          </header>

          <div className={styles.content}>
            <section className={styles.thanks} aria-labelledby="atm-thanks-title">
              <h1 id="atm-thanks-title">お振込ありがとうございました</h1>
              <div className={styles.artwork}>
                <img src={illustration} alt="お辞儀をする銀行員の男女のイラスト" />
              </div>
              <p className={styles.messageFoot}>またのご利用を心よりお待ちしております。</p>
            </section>

            <div className={styles.notice} role="status">
              <span className={styles.noticeIcon} aria-hidden="true">!</span>
              <div>
                <strong>カード・ご利用明細票をお取りください。</strong>
                <span>お忘れ物がないよう、ご確認をお願いいたします。</span>
              </div>
              <span className={styles.noticeArrow} aria-hidden="true">›</span>
            </div>
          </div>
        </div>
        <div className={styles.machineBottom} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </main>
  )
}

export default AtmTransferComplete
