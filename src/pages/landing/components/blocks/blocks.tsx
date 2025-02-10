import React from "react"
import styles from "./blocks.module.css"

export const LandingBlocks: React.FC = (): JSX.Element => {
	return (
		<section className={styles.blocks}>
			{/* Functionality block */}
			<div className={`${styles.block} ${styles.functionality}`}>
				<h3 className={styles.functionality__title}>Create Task</h3>
				<p className={styles.functionality__description}>
					You can create tasks easily through a simple interface Provide a true,
					description, due date, and add a label or pronty according ta your needs
				</p>
			</div>

			{/* Design block */}
			<div className={`${styles.block} ${styles.design}`}>
				<h3 className={styles.design__title}>Manage your project</h3>
			</div>

			{/* About block */}
			<div className={`${styles.block} ${styles.about}`}>
				<h3 className={styles.about__title}>About FEBFES</h3>

				<p className={styles.about__description}>
					Effective solutions to manage your tasks more efficiently and effectively. With
					powerful features and an intuitive interface, we make sure that you can
					organize, track and complete your tasks with ease.
				</p>
			</div>
		</section>
	)
}
