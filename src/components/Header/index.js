import styles from './styles.module.css';
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
    </header>
  )
}