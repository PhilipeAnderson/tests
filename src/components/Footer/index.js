import styles from './styles.module.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  return(
    <main className={styles.container}>
      <section className={styles.content}>
        <article className={styles.netSocial}>
          <h1>Siga-nos nas redes sociais</h1>
          <p>Faça parte da nossa Comunidade !</p>
          <footer>
            <i><FaWhatsapp /></i>
            <i><FaFacebook /></i>
            <i><FaInstagram /></i>
          </footer>
        </article>
      </section>
    </main>
  )
}