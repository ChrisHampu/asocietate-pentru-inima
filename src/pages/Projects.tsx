import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import projectsImage from '../assets/projects-boxes.jpeg'
import styles from '../styles/page.module.css'

const programmes = [
  {
    title: 'Copii',
    color: styles.cardGreen,
    text: 'Credem că fiecare copil merită șansa la un viitor mai bun. Ne propunem să sprijinim copiii și familiile care se confruntă cu dificultăți și să contribuim la crearea unor oportunități care să le ofere sprijin, siguranță și speranță.',
    projects: 'O masă caldă, un gest de grijă',
  },
  {
    title: 'Persoane vârstnice',
    color: styles.cardGold,
    text: 'Uneori, cel mai important lucru pe care îl putem oferi este să fim acolo. Ne dorim ca persoanele vârstnice care au nevoie de ajutor să se simtă văzute, ascultate și sprijinite, dar mai ales să știe că nu sunt singure.',
    projects: 'Nimeni singur',
  },
  {
    title: 'Persoane vulnerabile',
    color: styles.cardPurple,
    text: 'Suntem alături de oamenii care trec prin perioade dificile, fie că se confruntă cu probleme de sănătate, dificultăți sociale sau alte situații care le afectează viața de zi cu zi. Căutăm, împreună cu ei și cu partenerii noștri, soluții prin care sprijinul să ajungă acolo unde poate face cu adevărat diferența.',
    projects: 'Un început mai bun · Împreună pentru comunitate',
  },
]

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Proiectele noastre"
        title="Suntem acolo unde este nevoie de noi."
        image={projectsImage}
        imageAlt="Voluntari care pregătesc cutii cu ajutoare pentru comunitate"
      >
        <p className={styles.lead}>
          Fiecare proiect pornește de la o nevoie reală și de la convingerea că,
          prin implicare și solidaritate, putem aduce o schimbare concretă în
          viața oamenilor.
        </p>
      </PageHero>

      <section className={`container ${styles.section}`}>
        <h2>Direcțiile noastre</h2>
        <ul className={styles.cardGrid}>
          {programmes.map((programme) => (
            <li
              key={programme.title}
              className={`${styles.card} ${programme.color}`}
            >
              <h3>{programme.title}</h3>
              <p>{programme.text}</p>
              <p className={styles.cardTag}>{programme.projects}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.narrow}>
          <h2>O singură inimă pentru oameni</h2>
          <p className={styles.text}>
            Fiecare proiect începe de la o nevoie reală. Ascultăm. Ne implicăm.
            Căutăm soluții. Construim parteneriate. Și, împreună cu oamenii care
            aleg să ne susțină, transformăm sprijinul în fapte.
          </p>
        </div>
      </section>

      <section className={styles.sectionSoft}>
        <div className={`container ${styles.narrow}`}>
          <h2>Proiectele prind viață împreună</h2>
          <p className={styles.text}>
            Pe măsură ce proiectele noastre vor fi lansate, aici vei putea
            descoperi poveștile lor, oamenii cărora le sunt dedicate și
            rezultatele pe care le construim împreună.
          </p>
          <div className={styles.actions}>
            <Link to="/get-involved" className="btn btn-primary">
              Susține un proiect →
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Semnalează o nevoie
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
