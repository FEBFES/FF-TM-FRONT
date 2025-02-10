import React from "react"
import styles from "./section-header.module.css"

interface SectionHeaderProps {
	title: string
	subTitle?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subTitle }): JSX.Element => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.subTitle}>{subTitle}</p>
		</div>
	)
}

export default SectionHeader
