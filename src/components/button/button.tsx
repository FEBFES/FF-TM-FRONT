import React, { ButtonHTMLAttributes, forwardRef } from "react"
import styles from "./button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
	fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ title, fullWidth, ...props }, ref) => {
	return (
		<button
			{...props}
			ref={ref}
			className={`${styles.button} ${fullWidth && styles.fullWidth} ${props.className}`}>
			{title}
		</button>
	)
})

export default Button
