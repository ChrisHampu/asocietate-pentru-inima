import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import communityImage from '../assets/community.jpeg'
import { preventSubmit } from '../forms'
import { orPending, site } from '../site-data'
import styles from '../styles/page.module.css'

const frequencies = [
  { id: 'once', label: 'Donație unică' },
  { id: 'monthly', label: 'Donație lunară' },
]

const amounts = ['15 lei', '50 lei', '100 lei', '300 lei', 'Altă sumă']

export default function Donate() {
  return (
    <>
      <PageHero
        eyebrow="Donează"
        title="Împreună putem face binele să ajungă mai departe."
        image={communityImage}
        imageAlt="Oameni din comunitate adunați la o acțiune a asociației"
      >
        <p className={styles.lead}>
          Fiecare gest contează. Prin donația ta, ne ajuți să fim alături de
          copii, persoane vârstnice și oameni care trec prin momente dificile.
        </p>
      </PageHero>

      <section className={`container ${styles.section}`}>
        <div className={`${styles.split} ${styles.splitTop}`}>
          <div>
            <h2>Alege cum vrei să ajuți</h2>
            <form className={styles.form} onSubmit={preventSubmit}>
              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Frecvența donației</legend>
                <div className={styles.choiceGroup}>
                  {frequencies.map((frequency, index) => (
                    <label key={frequency.id} className={styles.choice}>
                      <input
                        type="radio"
                        name="frequency"
                        value={frequency.id}
                        defaultChecked={index === 0}
                      />
                      {frequency.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Suma</legend>
                <div className={styles.choiceGroup}>
                  {amounts.map((amount, index) => (
                    <label key={amount} className={styles.choice}>
                      <input
                        type="radio"
                        name="amount"
                        value={amount}
                        defaultChecked={index === 1}
                      />
                      {amount}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className={styles.field}>
                <label htmlFor="donor-name">Nume și prenume</label>
                <input id="donor-name" name="name" type="text" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="donor-email">E-mail</label>
                <input id="donor-email" name="email" type="email" required />
              </div>

              <button type="submit" className="btn btn-primary">
                Donează acum
              </button>
              <p className={styles.formNote}>
                Plata online va fi disponibilă în curând. Până atunci, poți
                susține asociația prin transfer bancar.
              </p>
            </form>
          </div>

          <div>
            <h2>Preferi transferul bancar?</h2>
            <p className={styles.text}>
              Poți susține activitatea {site.nameGenitive} și prin transfer
              bancar.
            </p>
            <div className={styles.dataBox}>
              <dl className={styles.dataList}>
                <dt>Beneficiar</dt>
                <dd>{site.name}</dd>
                <dt>IBAN RON</dt>
                <dd>{orPending(site.bank.ibanRon)}</dd>
                <dt>IBAN EURO</dt>
                <dd>{orPending(site.bank.ibanEur)}</dd>
                <dt>Banca</dt>
                <dd>{orPending(site.bank.name)}</dd>
                <dt>CIF</dt>
                <dd>{orPending(site.cif)}</dd>
              </dl>
            </div>
            <p className={styles.text}>
              Donația ta ne ajută să transformăm sprijinul în fapte.
            </p>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <ul className={styles.cardGrid}>
          <li className={`${styles.card} ${styles.cardGreen}`}>
            <h3>Redirecționează 3,5%</h3>
            <p>
              Un gest care nu te costă nimic. Dacă ești eligibil, poți
              redirecționa 3,5% din impozitul pe venit către {site.name}.
            </p>
            <p className={styles.formNote}>
              Formularul 230 va fi disponibil aici în curând.
            </p>
          </li>
          <li className={`${styles.card} ${styles.cardGold}`}>
            <h3>Pentru companii</h3>
            <p>
              Transformă implicarea companiei tale în sprijin pentru comunitate.
              Companiile care doresc să susțină proiectele asociației o pot face
              prin sponsorizare, în condițiile prevăzute de legislația fiscală.
            </p>
            <Link to="/partners" className={styles.cardLink}>
              Hai să construim împreună →
            </Link>
          </li>
          <li className={`${styles.card} ${styles.cardPurple}`}>
            <h3>Transparență</h3>
            <p>
              Încrederea se construiește prin transparență. Ne asumăm să folosim
              responsabil resursele primite și să arătăm comunității cum
              sprijinul oferit se transformă în ajutor concret.
            </p>
            <Link to="/impact" className={styles.cardLink}>
              Vezi cum măsurăm impactul →
            </Link>
          </li>
        </ul>
      </section>

      <section className={styles.sectionSoft}>
        <div className={`container ${styles.narrow}`}>
          <h2>O inimă pentru fiecare om. O comunitate pentru toți.</h2>
          <p className={styles.text}>
            Ajutorul ajunge acolo unde este nevoie de noi. Credem în
            transparență și vom arăta cum sunt folosite donațiile și ce
            schimbare reușim să construim împreună.
          </p>
          <p className={styles.motto}>
            Împreună putem transforma un gest de astăzi într-o schimbare în
            viața cuiva.
          </p>
        </div>
      </section>
    </>
  )
}
