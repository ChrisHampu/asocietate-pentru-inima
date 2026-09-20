import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import founderImage from '../assets/founder.jpeg'
import { site } from '../site-data'
import styles from '../styles/page.module.css'

const activities = [
  'Sprijinirea copiilor din familii vulnerabile: rechizite, haine, mese calde, burse.',
  'Ajutorarea vârstnicilor singuri: alimente, medicamente, vizite la domiciliu.',
  'Sprijin pentru persoane cu afecțiuni grave: strângeri de fonduri pentru tratamente și echipamente medicale.',
  'Organizarea de voluntariat și evenimente caritabile în județul Sibiu.',
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Despre noi"
        title="Pentru oameni. Pentru comunitate. Pentru Sibiu."
        image={founderImage}
        imageAlt="Monica Hampu, fondatoarea și președinta asociației"
        shape="portrait"
      >
        <p className={styles.lead}>
          {site.name} s-a născut din dorința de a contribui la o comunitate mai
          unită, mai atentă și mai aproape de oamenii aflați în situații
          dificile.
        </p>
        <p className={styles.text}>
          Ne implicăm în sprijinirea persoanelor vulnerabile din județul Sibiu
          și dezvoltăm inițiative care răspund unor nevoi reale ale comunității.
          Fie că este vorba despre un copil care are nevoie de o șansă, un
          vârstnic care se confruntă cu singurătatea sau o persoană care trece
          printr-o perioadă dificilă, credem că sprijinul oferit la momentul
          potrivit poate face diferența.
        </p>
        <div className={styles.actions}>
          <a href="#povestea-noastra" className="btn btn-outline">
            Află povestea noastră →
          </a>
        </div>
      </PageHero>

      <section className={`container ${styles.section}`}>
        <div className={styles.narrow}>
          <h2>Împreună, putem face binele să conteze.</h2>
          <p className={styles.text}>
            Ne dorim o comunitate în care nimeni să nu se simtă singur în fața
            unei probleme și în care solidaritatea să se transforme în ajutor
            concret. Credem în apropierea dintre oameni, în responsabilitate și
            în puterea lucrurilor făcute împreună.
          </p>
          <p className={styles.text}>
            Suntem aici pentru oameni. Suntem aici pentru comunitate. Suntem
            aici pentru Sibiu.
          </p>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2>Misiune și viziune</h2>
        <ul className={styles.cardGrid}>
          <li className={`${styles.card} ${styles.cardGreen}`}>
            <h3>Misiunea noastră</h3>
            <p>
              {site.name} este o organizație non-profit dedicată sprijinirii
              copiilor, persoanelor vârstnice și persoanelor aflate în
              dificultate din județul Sibiu și din România. Oferim ajutor
              concret, promovăm solidaritatea și contribuim la dezvoltarea unei
              comunități în care fiecare persoană are șansa la o viață demnă.
            </p>
          </li>
          <li className={`${styles.card} ${styles.cardGold}`}>
            <h3>Viziunea noastră</h3>
            <p>
              Ne dorim o comunitate în care niciun copil nu abandonează școala
              din cauza sărăciei, niciun vârstnic nu este lăsat singur, iar
              persoanele care se confruntă cu probleme grave de sănătate primesc
              sprijinul de care au nevoie. Construim o comunitate în care
              fiecare copil are șansa la educație, fiecare persoană vârstnică
              este respectată și sprijinită, iar fiecare om aflat în suferință
              găsește ajutor și speranță.
            </p>
          </li>
        </ul>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.narrow}>
          <h2>Ce facem</h2>
          <ul className={styles.bulletList}>
            {activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="povestea-noastra" className={styles.sectionSoft}>
        <div className={`container ${styles.narrow}`}>
          <p className={styles.eyebrow}>Povestea noastră</p>
          <h2>Înapoi acasă, cu aceeași inimă pentru oameni.</h2>
          <p className={styles.text}>
            Povestea {site.nameGenitive} începe cu o experiență de viață construită
            departe de casă și cu dorința de a aduce acasă tot ceea ce a fost
            învățat de-a lungul anilor.
          </p>
          <p className={styles.text}>
            După 28 de ani petrecuți în Canada, fondatoarea și președinta
            asociației s-a întors acasă, în Sibiu, cu o experiență de 14 ani în
            sectorul non-profit, acumulată în cadrul fundației comunitare din
            orașul în care a locuit.
          </p>
          <p className={styles.text}>
            Drumul a început prin voluntariat: un an ca voluntar, un an în
            bordul de directori, apoi opt ani în funcția de președinte al
            fundației și, în următorii patru ani, director executiv. Au fost 14
            ani în care a văzut, zi de zi, cât de mult se poate schimba o
            comunitate atunci când oamenii aleg să se implice, să se sprijine
            reciproc și să construiască împreună.
          </p>
          <p className={styles.text}>
            Întoarcerea în România, după aproape trei decenii, nu a însemnat
            doar revenirea într-un loc drag, ci și începutul unei noi misiuni:
            aceea de a pune experiența, cunoștințele și dorința de a face bine
            în slujba comunității din Sibiu. Așa a luat naștere {site.name}.
          </p>

          <blockquote className={styles.quote}>
            „Am plecat din România cu dorința de a construi o viață mai bună și
            mă întorc acasă cu dorința de a contribui la o comunitate mai bună.
            În cei 14 ani în care m-am implicat în sectorul non-profit, am
            învățat că schimbarea nu vine de la un singur om. Ea apare atunci
            când oamenii se adună în jurul unei idei și aleg să facă ceva pentru
            cei din jurul lor.”
            <span className={styles.quoteAuthor}>
              Monica Hampu, fondatoare și președintă
            </span>
          </blockquote>

          <p className={styles.text}>
            Astăzi, această experiență continuă într-un loc apropiat de suflet:
            comunitatea din Sibiu. Ne dorim să transformăm experiența acumulată
            în sprijin concret, să construim proiecte care răspund unor nevoi
            reale și, mai presus de toate, să fim acolo pentru oamenii care au
            nevoie de o mână întinsă.
          </p>
          <p className={styles.motto}>{site.motto}</p>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className="container">
          <h2>Fă parte din schimbare.</h2>
          <p>
            Fiecare persoană implicată poate face o diferență în viața cuiva.
          </p>
          <div className={styles.actions}>
            <Link to="/get-involved" className="btn btn-light">
              Vreau să mă implic →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
