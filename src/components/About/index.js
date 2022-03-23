import styles from './styles.module.css';
import Reiki from '../../assets/jpr.png';


export function About() {
  return(
    <main className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.textAbout}>Reiki</h1>

        <aside className={styles.left}>

        </aside>

        <section className={styles.center}>
          <img src={Reiki} alt="Letras Japonesas falando sobre o Reiki" />
        </section>

        <aside className={styles.right}>
          
        </aside>

      </section>
    </main>

  )
}