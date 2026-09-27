import './FinanceInternship.css'

const growthPoints = [
  {
    number: '01',
    english: 'REAL WORK',
    title: '実務の真ん中で、学ぶ。',
    description: '金融の仕事を、遠くから眺めるだけで終わらせない。考え、手を動かし、実際の課題に向き合う経験を。',
    photo: 'TEAM / WORK',
  },
  {
    number: '02',
    english: 'FAST FEEDBACK',
    title: '挑戦を、次の力に変える。',
    description: '一つひとつの挑戦から学びを見つける。振り返りを重ねて、自分の成長を実感できる時間に。',
    photo: 'DISCUSSION',
  },
  {
    number: '03',
    english: 'NEW PERSPECTIVE',
    title: '視野を、もっと広く。',
    description: 'お金の流れから、社会の動きを知る。金融というフィールドで、未来の選択肢を広げよう。',
    photo: 'CITY / FINANCE',
  },
]

function PhotoPlaceholder({ label, className = '' }) {
  return (
    <div className={`photo-placeholder ${className}`} aria-label={`${label}の画像プレースホルダー`} role="img">
      <span className="photo-placeholder__cross photo-placeholder__cross--one" />
      <span className="photo-placeholder__cross photo-placeholder__cross--two" />
      <span className="photo-placeholder__label">PHOTO / {label}</span>
    </div>
  )
}

function FinanceInternship() {
  return (
    <div className="internship-page" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Finance Internship トップへ">
          <span className="brand__symbol" aria-hidden="true"><i /><i /><i /></span>
          <span className="brand__text">FINANCE<span>INTERNSHIP</span></span>
        </a>
        <nav className="header-nav" aria-label="ページ内ナビゲーション">
          <a href="#about">ABOUT</a>
          <a href="#growth">GROWTH</a>
          <a className="header-nav__cta" href="#message">MESSAGE <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__pattern" aria-hidden="true" />
          <div className="hero__inner">
            <div className="hero__content">
              <div className="eyebrow"><span className="eyebrow__line" /> STUDENT INTERNSHIP <span className="eyebrow__year">/ FINANCE</span></div>
              <p className="hero__english" aria-hidden="true">GO BEYOND<span>.</span></p>
              <h1 id="hero-title">昨日の自分を、<br /><strong>追い越す場所へ。</strong></h1>
              <p className="hero__lead">知らなかった世界を知る。できなかったことが、できるようになる。<br className="desktop-break" />金融の最前線で、まだ見ぬ自分に出会おう。</p>
              <a className="primary-link" href="#growth">成長できる理由を見る <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero__visual" aria-hidden="true">
              <div className="hero__visual-accent" />
              <PhotoPlaceholder label="MAIN VISUAL" className="photo-placeholder--hero" />
              <span className="hero__visual-stamp">MOVE<br />YOUR<br />FUTURE<span>↗</span></span>
              <span className="hero__visual-number">01 / 03</span>
            </div>
          </div>
          <div className="hero__bottom"><span>FIND YOUR NEXT STAGE</span><span className="hero__scroll">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span></div>
        </section>

        <section className="intro" id="about" aria-labelledby="about-title">
          <div className="section-label"><span>01</span> ABOUT THE INTERNSHIP</div>
          <div className="intro__grid">
            <div className="intro__heading">
              <span className="outline-word" aria-hidden="true">GROWTH</span>
              <h2 id="about-title">成長を、<br /><em>偶然にしない。</em></h2>
            </div>
            <div className="intro__copy">
              <p>教室の外に出ると、学びはもっとおもしろくなる。</p>
              <p>金融という大きなフィールドで、自分の考えを試し、仲間と刺激し合い、一歩ずつ前へ進む。ここには、挑戦した分だけ吸収できる時間があります。</p>
              <a href="#growth" className="text-link">WHAT YOU CAN EXPERIENCE <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="growth" id="growth" aria-labelledby="growth-title">
          <div className="growth__header">
            <div>
              <div className="section-label section-label--light"><span>02</span> WHY YOU GROW</div>
              <h2 id="growth-title">ここで、<br />可能性を広げよう<span>。</span></h2>
            </div>
            <p>経験が、自信になる。<br />次の一歩につながる、3つの成長機会。</p>
          </div>
          <div className="growth__cards">
            {growthPoints.map((point) => (
              <article className="growth-card" key={point.number}>
                <PhotoPlaceholder label={point.photo} className="photo-placeholder--card" />
                <div className="growth-card__content">
                  <div className="growth-card__meta"><span>{point.number}</span><span>{point.english}</span></div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="message" id="message" aria-labelledby="message-title">
          <div className="message__shape" aria-hidden="true" />
          <div className="section-label"><span>03</span> YOUR NEXT STEP</div>
          <p className="message__english">THE FUTURE<br />STARTS HERE<span>.</span></p>
          <h2 id="message-title">未来を変える一歩は、<br />ここから始まる。</h2>
          <p className="message__copy">少しでも心が動いたなら、その気持ちを次の行動へ。<br />あなたの挑戦を、待っています。</p>
          <a className="message__back" href="#top">BACK TO TOP <span aria-hidden="true">↑</span></a>
        </section>
      </main>

      <footer className="site-footer"><span>FINANCE INTERNSHIP</span><span>MAKE YOUR NEXT MOVE.</span></footer>
    </div>
  )
}

export default FinanceInternship
