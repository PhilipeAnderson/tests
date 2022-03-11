import styles from './styles.module.css';

export function Header() {
  return (
    <header className={styles.container}>
      <main className={styles.content}>
        <nav>
          <ul className={styles.menu}>
            <li><a className={styles.textMenu} href="/">Início</a></li>
            <li><a className={styles.textMenu} href="/">Sobre o Reiki</a></li>
          </ul>
        </nav>
        <div>
          <ul className={styles.socialNet}>
            <li className={styles.icons}>Insta</li>
            <li className={styles.icons}>Face</li>
            <li className={styles.icons}>Whats</li>
          </ul>
        </div>
      </main>
    </header>
  )
}