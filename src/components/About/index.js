import styles from './styles.module.css';
import Reiki from '../../assets/jpr.png';


export function About() {
  return(
    <main className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.textAbout}>O que é o Reiki</h1>
        <div className={styles.contentAbout}>
          <aside className={styles.left}>
            <div className={styles.tipsAbout}>
              <h4>Título</h4>
              <p>
                Alguma coisa escrita aqui sobre alguma característica sobre o atendimento.
              </p>
            </div>
            <div className={styles.tipsAbout}>
              <h4>Título</h4>
              <p>
                Alguma coisa escrita aqui sobre alguma característica sobre o atendimento.
              </p>
            </div>
            <div className={styles.tipsAbout}>
              <h4>Título</h4>
              <p>
                Alguma coisa escrita aqui sobre alguma característica sobre o atendimento.
              </p>
            </div>
          </aside>

          <div className={styles.center}>
            <img className={styles.imageAbout} src={Reiki} alt="Letras Japonesas falando sobre o Reiki" />
          </div>

          <aside className={styles.right}>
            <div className={styles.tipsAbout}>
              <h4>Título</h4>
              <p>
                Alguma coisa escrita aqui sobre alguma característica sobre o atendimento.
              </p>
            </div>
            <div className={styles.tipsAbout}>
              <h4>Título</h4>
              <p>
                Alguma coisa escrita aqui sobre alguma característica sobre o atendimento.
              </p>
            </div>
            <div className={styles.tipsAbout}>
              <h4>Título</h4>
              <p>
                Alguma coisa escrita aqui sobre alguma característica sobre o atendimento.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>

  )
}