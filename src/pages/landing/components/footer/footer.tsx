import React from "react"
import styles from "./footer.module.css"
import { Button } from "@/components"

export const LandingFooter: React.FC = (): JSX.Element => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__main}>
				<h1 className={styles.main__title}>Ready to boost your productivity?</h1>
				<Button title="Try it now" className={styles.main__btn} />
			</div>

			<div className={styles.footer__divider} />

			<div className={styles.footer__desc}>
				<p>FEBFES</p>
				<p>Boosting Productivity and Achieving Goals</p>
			</div>

			<span className={styles.copyright}>all right reserved by FEBFES</span>
		</footer>
	)
}
