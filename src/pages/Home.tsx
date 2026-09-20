import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const stats = [
  { value: '250+', label: 'Lorem ipsum dolor', color: 'green' as const },
  { value: '48', label: 'Consectetur adipis', color: 'gold' as const },
  { value: '12k', label: 'Eiusmod tempor', color: 'blue' as const },
  { value: '9', label: 'Magna aliqua', color: 'purple' as const },
]

const statColorClasses = {
  green: styles.statValueGreen,
  gold: styles.statValueGold,
  blue: styles.statValueBlue,
  purple: styles.statValuePurple,
}

const pillars = [
  {
    title: 'Lorem Ipsum',
    color: 'green' as const,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    title: 'Dolor Sit Amet',
    color: 'gold' as const,
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
  {
    title: 'Consectetur',
    color: 'purple' as const,
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
  },
]

const pillarColorClasses = {
  green: styles.cardGreen,
  gold: styles.cardGold,
  purple: styles.cardPurple,
}

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>A charitable association</p>
          <h1>
            Lorem ipsum dolor sit amet,{' '}
            <span className="hl-blue">consectetur adipiscing</span> elit, sed
            do eiusmod tempor.
          </h1>
          <p className={styles.lead}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <div className={styles.actions}>
            <Link to="/donate" className="btn btn-primary">
              Donate
            </Link>
            <Link to="/get-involved" className="btn btn-outline">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <section className={`container ${styles.statsSection}`}>
        <ul className={styles.stats}>
          {stats.map((stat) => (
            <li key={stat.value} className={styles.statCard}>
              <span
                className={`${styles.statValue} ${statColorClasses[stat.color]}`}
              >
                {stat.value}
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.split}>
          <div>
            <h2>
              Our <span className="hl-gold">mission</span> &amp; vision
            </h2>
            <p className={styles.bodyText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <p className={styles.bodyText}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore. Excepteur sint occaecat{' '}
              <span className="hl-blue">cupidatat non proident</span>, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className={styles.mediaPlaceholder} aria-hidden="true">
            Image placeholder
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>What we do</h2>
        <p className={styles.sectionLead}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.cardGrid}>
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className={`${styles.card} ${pillarColorClasses[pillar.color]}`}
            >
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to make a difference?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <Link to="/donate" className="btn btn-light">
            Donate today
          </Link>
        </div>
      </section>
    </>
  )
}
