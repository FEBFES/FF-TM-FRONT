import React from "react"
import styles from "./info.module.css"
import { Button } from "@/components"

export const LandingInfoBlock: React.FC = (): JSX.Element => {
	return (
		<section className={styles.info}>
			<h1 className={styles.info__title}>Think, plan, and track</h1>
			<h3 className={styles.info__subTitle}>all in one place</h3>
			<p className={styles.info__description}>
				efficiently manage your tasks and boost productivity
			</p>
			<div className={styles.info__btn}>
				<Button title="Try it now" />
			</div>
		</section>
	)
}
