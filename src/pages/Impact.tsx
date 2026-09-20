import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import mottoImage from '../assets/motto.png'
import styles from '../styles/page.module.css'

const measures = [
  'Oameni sprijiniți',
  'Proiecte realizate',
  'Voluntari implicați',
  'Parteneriate create',
  'Fonduri transformate în ajutor',
]

const values = [
  {
    title: 'Ajutăm cu inima',
    color: styles.cardGreen,
    text: 'Pornim de la nevoia omului din fața noastră și căutăm sprijinul care îi este de folos.',
  },
  {
    title: 'Conducem cu integritate',
    color: styles.cardGold,
    text: 'Folosim responsabil resursele primite și arătăm comunității cum ajung ele la oameni.',
  },
  {
    title: 'Construim cu responsabilitate',
    color: styles.cardPurple,
    text: 'Construim proiecte care răspund unor nevoi reale și parteneriate care țin în timp.',
  },
]

export default function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Transformăm implicarea în fapte."
        image={mottoImage}
        imageAlt="Motto-ul asociației: ajutăm cu inima, conducem cu integritate, construim cu responsabilitate"
        shape="portrait"
      >
        <p className={styles.lead}>
          Nu vrem doar să vorbim despre problemele comunității. Vrem să căutăm
          soluții, să ne implicăm și să transformăm sprijinul primit în ajutor
          concret pentru oameni.
        </p>
        <p className={styles.text}>
          Suntem la început de drum, dar avem un obiectiv clar: să fim alături
          de oamenii din comunitatea noastră și să construim, pas cu pas, un
          impact care poate fi văzut și măsurat.
        </p>
      </PageHero>

      <section className={`container ${styles.section}`}>
        <h2>Valorile după care lucrăm</h2>
        <ul className={styles.cardGrid}>
          {values.map((value) => (
            <li key={value.title} className={`${styles.card} ${value.color}`}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.narrow}>
          <h2>Ce vom măsura</h2>
          <p className={styles.text}>
            Pe măsură ce proiectele noastre se dezvoltă, aici vom prezenta
            transparent rezultatele muncii noastre:
          </p>
          <ul className={styles.bulletList}>
            {measures.map((measure) => (
              <li key={measure}>{measure}</li>
            ))}
          </ul>
          <p className={styles.text}>
            Pentru noi, însă, impactul nu înseamnă doar cifre. În spatele
            fiecărui număr se află un om, o poveste și un motiv pentru care
            alegem să mergem mai departe.
          </p>
        </div>
      </section>

      <section className={styles.sectionSoft}>
        <div className={`container ${styles.narrow}`}>
          <h2>Oamenii pentru care facem ceea ce facem</h2>
          <p className={styles.text}>
            Aici vom spune poveștile oamenilor și comunităților pe care
            proiectele noastre le vor sprijini, cu respect pentru demnitatea și
            viața lor privată.
          </p>
          <p className={styles.text}>
            Pentru că uneori impactul înseamnă o nevoie rezolvată. Alteori, o
            oportunitate oferită, o perioadă dificilă depășită sau, pur și
            simplu, faptul că cineva a știut că nu este singur.
          </p>
          <div className={styles.actions}>
            <Link to="/projects" className="btn btn-primary">
              Vezi proiectele noastre →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
