import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Motto } from '../components/Motto'
import founderImage from '../assets/founder.png'
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
          <h2>Unele povești nu încep cu un proiect.</h2>
          <p className={styles.text}>
            Încep cu o lecție de viață transmisă din generație în generație.
            Povestea {site.nameGenitive} își are rădăcinile cu mult înainte de
            înființarea ei.
          </p>
          <p className={styles.text}>
            Mama mea a crescut într-un orfelinat de la o vârstă foarte fragedă.
            A cunoscut de copil ce înseamnă lipsurile, singurătatea și cât de
            important este să existe cineva care să îți întindă o mână atunci
            când ai nevoie.
          </p>
          <p className={styles.text}>
            Din experiențele prin care a trecut, ea a ales să îmi transmită mie
            nu tristețea trecutului, ci una dintre cele mai importante lecții
            ale vieții mele: să nu rămân indiferentă atunci când pot ajuta.
          </p>
          <p className={styles.text}>
            De la mama mea am învățat să privesc oamenii dincolo de situația în
            care se află, să văd nevoia, dar mai ales omul. Am învățat că un
            gest care pentru noi poate părea mic poate însemna enorm pentru
            cineva care trece printr-un moment greu.
          </p>
          <p className={styles.text}>
            Această lecție m-a însoțit întreaga viață. Din România în Canada
            și, după aproape trei decenii, din nou acasă.
          </p>
          <p className={styles.text}>
            Am petrecut 28 de ani în Canada, iar implicarea în comunitate a
            devenit o parte importantă din viața mea.
          </p>
          <p className={styles.text}>
            Timp de 14 ani am activat în cadrul unei fundații canadiene: am
            început ca voluntar, timp de doi ani, apoi am avut onoarea de a
            ocupa funcția de Președinte timp de opt ani și, ulterior, funcția
            de Executive Director timp de patru ani.
          </p>
          <p className={styles.text}>
            Acei ani m-au învățat enorm despre voluntariat, responsabilitate,
            organizarea proiectelor și evenimentelor caritabile, colaborarea cu
            sponsorii și, mai presus de toate, despre puterea extraordinară pe
            care o poate avea o comunitate atunci când oamenii aleg să
            lucreze împreună.
          </p>
          <p className={styles.text}>
            Am văzut ce se poate realiza atunci când în spatele unei cauze
            există seriozitate, transparență, perseverență și oameni cărora le
            pasă.
          </p>
          <p className={styles.text}>
            După aproape trei decenii petrecute în Canada, m-am întors în
            România cu dorința de a continua aici ceea ce am făcut cu atât de
            mult drag acolo.
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

          <h3 className={styles.subheading}>O poveste care merge mai departe</h3>
          <p className={styles.text}>
            Astăzi, această poveste continuă alături de cei doi fii ai mei,
            împreună cu care am fondat {site.name}.
          </p>
          <p className={styles.text}>
            Și poate acesta este lucrul cel mai frumos pentru mine: o valoare
            pe care am primit-o de la mama mea merge acum mai departe către o
            nouă generație.
          </p>
          <p className={styles.text}>
            <strong>
              Trei generații. O singură lecție: să nu fim indiferenți.
            </strong>
          </p>
          <p className={styles.text}>
            Mama mea m-a învățat să ajut. Eu am încercat să transform această
            lecție într-un mod de a trăi. Iar astăzi, împreună cu fiii mei,
            vrem să o ducem mai departe în comunitatea noastră.
          </p>

          <h3 className={styles.subheading}>
            De ce „O Singură Inimă pentru Comunitate”?
          </h3>
          <p className={styles.text}>
            Pentru că noi credem că o comunitate nu se construiește doar prin
            instituții, organizații sau proiecte. Se construiește prin oameni.
          </p>
          <p className={styles.text}>
            Prin copilul căruia îi oferim șansa să înceapă școala cu
            încredere. Prin familia pe care o ajutăm să treacă peste o perioadă
            dificilă. Prin bunicul sau bunica pe care cineva își face timp să
            îi viziteze. Prin voluntarul care oferă câteva ore din timpul său.
            Prin compania care alege să susțină un proiect. Prin fiecare om
            care spune: „Vreau să ajut.”
          </p>
          <p className={styles.text}>
            Nu ne propunem să promitem că putem rezolva toate problemele. Ne
            propunem însă ca, acolo unde putem face o diferență, să o facem cu
            seriozitate, respect și inimă.
          </p>
          <p className={styles.text}>
            Vom începe în județul Sibiu, aproape de oamenii și comunitățile pe
            care dorim să le cunoaștem, iar fiecare proiect va fi construit în
            jurul unor nevoi reale și al unui ajutor concret.
          </p>
          <p className={styles.text}>
            Pentru noi, „O Singură Inimă pentru Comunitate” nu este doar numele
            unei asociații. Este continuarea unei povești începute cu mulți
            ani în urmă. Povestea unei mame care, deși a cunoscut greutățile
            copilăriei, a ales să îi transmită fiicei sale dorința de a face
            bine. Povestea unei fiice care a dus această lecție cu ea peste
            ocean și înapoi acasă. Și povestea unei noi generații care a ales
            să o ducă mai departe.
          </p>
          <p className={styles.text}>Pentru că binele se construiește împreună.</p>
          <p className={styles.motto}>
            <Motto />
            <br />
            {site.tagline}
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
            <Link to="/get-involved" className="btn btn-light">
              Vreau să mă implic →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
