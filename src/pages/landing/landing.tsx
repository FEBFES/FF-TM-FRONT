import React from "react"
import styles from "./landing.module.css"
import { LandingBlocks, LandingFooter, LandingHeader, LandingInfoBlock } from "./components"

const LandingPage: React.FC = (): JSX.Element => {
	return (
		<div className={styles.page}>
			<div className={styles.layout}>
				<LandingHeader />

				<LandingInfoBlock />

				<LandingBlocks />

				<LandingFooter />
			</div>
		</div>
	)
}

export default LandingPage
