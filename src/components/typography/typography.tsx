import React from "react"
// import styles from "./typography.module.css"

interface TypographyProps {
	text: string

	//todo
	size?: string
	variant?: string
}

const Typography: React.FC<TypographyProps> = ({ text, size, variant }): JSX.Element => {
	return <span>{text}</span>
}

Typography.displayName = "Typography"

export default Typography
