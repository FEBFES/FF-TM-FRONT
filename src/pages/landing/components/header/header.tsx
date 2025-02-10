import React from "react"
import styles from "./header.module.css"
import { LogoIcon } from "@/assets/icons/logo"

export const LandingHeader: React.FC = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<div className={styles.icon}>
				<LogoIcon isDark />
			</div>
		</header>
	)
}
