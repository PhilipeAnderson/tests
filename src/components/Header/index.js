import styles from './styles.module.css';
import Lotus from '../../assets/lotus.png';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export function Header() {
  return (
    <header className={styles.container}>
      <main className={styles.content}>
        <nav>
          <ul className={styles.menu}>
            <li><a className={styles.textMenu} href="/">Início</a></li>
            <li><a className={styles.textMenu} href="/">Reiki</a></li>
          </ul>
        </nav>
        <div>
          <ul className={styles.socialNet}>
            <li className={styles.icons}>
              <a>
                <FaInstagram />
              </a>
            </li>
            <li className={styles.icons}>
              <a>
                <FaFacebook />
              </a>
            </li>
            <li className={styles.icons}>
              <a>
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </main>
      <section className={styles.bodyHeader}>
        <h1 className={styles.textBody}>
          O Reiki é uma ferramenta natural que pode ser usada 
          para nos ajudar a lidar com as tensões da vida cotidiana.
        </h1>
        <img className={styles.lotus} src={Lotus} alt="Flor de Lotus" />
      </section>
    </header>
  )
}