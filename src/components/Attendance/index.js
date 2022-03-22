import styles from './styles.module.css';

export function Attendance() {
	return (
		<main className={styles.container}>
			<section className={styles.content}>
				<div className={styles.boxAttendance}>
					<header className={styles.headerBox}>
						<h2 className={styles.headerTitle}>Presencial</h2>
						<br />
						<p className={styles.headerText}>
							Temos um ambiente preparado para te atender, através
							de horários agendados.
						</p>
					</header>

					<button className={styles.buttomBox}>
						Fale Conosco
					</button>
				</div>
				<div className={styles.boxAttendance}>
					<header className={styles.headerBox}>
						<h2 className={styles.headerTitle}>Domicílio</h2>
						<br />
						<p className={styles.headerText}>
							Temos um ambiente preparado para te atender, através
							de horários agendados.
						</p>
					</header>

					<button className={styles.buttomBox}>
						Fale Conosco
					</button>
				</div>
				<div className={styles.boxAttendance}>
					<header className={styles.headerBox}>
						<h2 className={styles.headerTitle}>Online</h2>
						<br />
						<p className={styles.headerText}>
							Temos um ambiente preparado para te atender, através
							de horários agendados.
						</p>
					</header>

					<button className={styles.buttomBox}>
						Fale Conosco
					</button>
				</div>
			</section>
		</main>
	)
}