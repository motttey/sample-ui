import './FinanceInternship.css'

const opportunities = [
  { english: 'REAL WORK', title: '金融の現場を知る', description: '実際の課題に向き合い、考える力を磨く。' },
  { english: 'FEEDBACK', title: '挑戦から学ぶ', description: '仲間との対話や振り返りを、次の成長へ。' },
  { english: 'PERSPECTIVE', title: '視野を広げる', description: 'お金の流れから、社会と未来を見つめる。' },
]

function LightningArrow({ className }) {
  return (
    <svg className={`finance-poster__lightning ${className}`} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M40 3 12 35h17l-9 26 35-37H37l8-21Z" />
    </svg>
  )
}

function FinanceInternship() {
  return (
    <div className="finance-poster-stage">
      <article className="finance-poster" aria-labelledby="finance-poster-title">
        <header className="finance-poster__header">
          <div className="finance-poster__brand">
            <span className="finance-poster__mark" aria-hidden="true"><i /><i /><i /></span>
            <div><strong>フジコ銀行</strong><span>FUJIKO BANK</span></div>
          </div>
        </header>

        <main className="finance-poster__main">
          <section className="finance-poster__hero" aria-labelledby="finance-poster-title">
            <p className="finance-poster__kicker"><span aria-hidden="true" /> フジコ銀行のインターンシップ</p>
            <div className="finance-poster__hero-layout">
              <div>
                <p className="finance-poster__english" aria-hidden="true">JIKKOU<span>.</span></p>
                <h1 id="finance-poster-title">その一歩が、<br /><em>未来の価値</em>になる。</h1>
              </div>
              <div className="finance-poster__hero-side" aria-hidden="true"><span>F</span><small>FUTURE<br />STARTS HERE</small></div>
            </div>
            <p className="finance-poster__hero-copy">金融の最前線で、知らなかった自分に出会う。<br />フジコ銀行で、次の可能性を広げよう。</p>
          </section>

          <section className="finance-poster__income" aria-labelledby="finance-poster-income-title">
            <div className="finance-poster__income-content">
              <h2 id="finance-poster-income-title">高年収を、<br /><span>目指せる自分へ。</span></h2>
              <p>金融の仕事に触れ、将来につながる力を磨こう。</p>
            </div>
            <LightningArrow className="finance-poster__income-arrow" />
          </section>

          <section className="finance-poster__experience" aria-labelledby="finance-poster-experience-title">
            <div className="finance-poster__experience-heading">
              <h2 id="finance-poster-experience-title">ここで得られる、3つの経験。</h2>
            </div>
            <div className="finance-poster__opportunities">
              {opportunities.map((item) => (
                <div className="finance-poster__opportunity" key={item.english}>
                  <div className="finance-poster__opportunity-meta">{item.english}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="finance-poster__footer">
          <div><span>TAKE YOUR NEXT STEP</span><strong>未来を動かすのは、あなたの挑戦だ。</strong></div>
          <span className="finance-poster__footer-mark" aria-hidden="true">F<LightningArrow className="finance-poster__footer-arrow" /></span>
        </footer>
      </article>
    </div>
  )
}

export default FinanceInternship
