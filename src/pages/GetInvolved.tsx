import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import handsImage from '../assets/hands-red-heart.jpeg'
import { site } from '../site-data'
import styles from '../styles/page.module.css'

const ways = [
  {
    icon: '❤️',
    title: 'Donează',
    color: styles.cardPurple,
    text: 'Contribuția ta ne ajută să ajungem la mai mulți oameni care au nevoie de sprijin. O donație poate însemna un ajutor concret pentru cineva care are nevoie.',
    linkLabel: 'Donează acum →',
    to: '/donate',
  },
  {
    icon: '🤝',
    title: 'Devino voluntar',
    color: styles.cardGreen,
    text: 'Implică-te cu timpul, energia și abilitățile tale. Timpul și implicarea ta pot deveni parte dintr-o schimbare reală.',
    linkLabel: 'Vreau să fiu voluntar →',
    to: '/contact',
  },
  {
    icon: '🏢',
    title: 'Devino partener',
    color: styles.cardGold,
    text: 'Construim împreună proiecte care pot produce schimbări reale în comunitate. Companiile și organizațiile care ni se alătură pot contribui la proiecte care aduc valoare comunității.',
    linkLabel: 'Devino partener →',
    to: '/partners',
  },
]

const gestures = [
  'Poți dona.',
  'Poți deveni voluntar.',
  'Poți susține un proiect.',
  'Poți deveni partener.',
  'Poți spune mai departe povestea noastră.',
]

export default function GetInvolved() {
  return (
    <>
      <PageHero
        eyebrow="Implică-te"
        title="Binele se construiește împreună."
        image={handsImage}
        imageAlt="Mâini suprapuse sub o inimă roșie, alături de mesajul „Binele se construiește împreună”"
        shape="natural"
      >
        <p className={styles.lead}>
          Nu trebuie să poți face totul. Uneori, o oră de voluntariat, o donație
          sau o mână întinsă poate însemna enorm pentru cineva.
        </p>
      </PageHero>

      <section className={`container ${styles.section}`}>
        <h2>Cum te poți implica</h2>
        <ul className={styles.cardGrid}>
          {ways.map((way) => (
            <li key={way.title} className={`${styles.card} ${way.color}`}>
              <span className={styles.cardIcon} aria-hidden="true">
                {way.icon}
              </span>
              <h3>{way.title}</h3>
              <p>{way.text}</p>
              <Link to={way.to} className={styles.cardLink}>
                {way.linkLabel}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.narrow}>
          <h2>Binele se face împreună.</h2>
          <p className={styles.text}>
            Nu trebuie să faci ceva extraordinar pentru a schimba viața cuiva.
          </p>
          <ul className={styles.bulletList}>
            {gestures.map((gesture) => (
              <li key={gesture}>{gesture}</li>
            ))}
          </ul>
          <p className={styles.text}>
            Fiecare gest contează. Fiecare om contează.
          </p>
        </div>
      </section>

      <section className={styles.sectionSoft}>
        <div className={`container ${styles.narrow}`}>
          <h2>Împreună construim o comunitate mai bună.</h2>
          <p className={styles.text}>
            Ne dorim ca fiecare om din {site.county} să știe că, atunci când
            trece printr-o perioadă dificilă, există oameni care îi pot întinde
            o mână de ajutor.
          </p>
          <p className={styles.motto}>
            O singură inimă pentru comunitate. Pentru oameni. Pentru speranță.
            Pentru un viitor mai bun.
          </p>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className="container">
          <h2>Fă parte din schimbare.</h2>
          <p>
            Fiecare persoană implicată poate face o diferență în viața cuiva.
          </p>
          <div className={styles.actions}>
            <Link to="/donate" className="btn btn-light">
              Donează
            </Link>
            <Link to="/contact" className="btn btn-light">
              Scrie-ne
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
