import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { projects } from '../projects-data'
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
        <h2>Proiectele și evenimentele noastre</h2>
        <p className={styles.sectionLead}>
          Cinci inițiative pentru comunitatea din județul Sibiu, din toamna lui
          2026 până la finalul lui 2027 — alege-o pe cea aproape de inima ta.
        </p>
        <ul className={styles.projectGrid}>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                to={`/projects/${project.slug}`}
                className={styles.projectCard}
              >
                <img
                  className={styles.projectCardImage}
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                />
                <div className={styles.projectCardBody}>
                  <p className={styles.projectCardMeta}>
                    {project.kind} · {project.period}
                  </p>
                  <h3>{project.title}</h3>
                  <span className={styles.projectCardLink}>
                    Descoperă proiectul →
                  </span>
                </div>
              </Link>
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
            Fiecare proiect are nevoie de oameni care să-l susțină. Alege
            inițiativa aproape de inima ta și ajută-ne să transformăm
            implicarea în ajutor concret pentru cei care au nevoie de noi.
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
