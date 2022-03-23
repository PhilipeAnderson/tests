import styles from './styles.module.css';
import Reiki from '../../assets/jpr.png';


export function About() {
  return(
    <main className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.textAbout}>Reiki</h1>
        <div className={styles.contentAbout}>
          <aside className={styles.left}>
            <div>
              <h3>Título</h3>
              <p>
                Alguma coisa escrita aqui sobre alguma caracteristica sobre o atendimento
              </p>
            </div>
            <div>
              <h3>Título</h3>
              <p>
                Alguma coisa escrita aqui sobre alguma caracteristica sobre o atendimento
              </p>
            </div>
            <div>
              <h3>Título</h3>
              <p>
                Alguma coisa escrita aqui sobre alguma caracteristica sobre o atendimento
              </p>
            </div>
          </aside>

          <div className={styles.center}>
            <img className={styles.imageAbout} src={Reiki} alt="Letras Japonesas falando sobre o Reiki" />
          </div>

          <aside className={styles.right}>
          <div>
            <h3>Título</h3>
            <p>
              Alguma coisa escrita aqui sobre alguma caracteristica sobre o atendimento
            </p>
            </div>
            <div>
            <h3>Título</h3>
            <p>
              Alguma coisa escrita aqui sobre alguma caracteristica sobre o atendimento
            </p>
            </div>
            <div>
            <h3>Título</h3>
            <p>
              Alguma coisa escrita aqui sobre alguma caracteristica sobre o atendimento
            </p>
            </div>
          </aside>
        </div>
      </section>
    </main>

  )
}