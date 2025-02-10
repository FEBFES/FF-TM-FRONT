import { ChangeEventHandler, InputHTMLAttributes } from "react"
import styles from "./input-field.module.css"
import useInput, { ValidationRule } from "./useInput"
import { clsx } from "clsx"

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	type?: string
	placeholder?: string
	validationRules?: ValidationRule[]
	value?: string
	onChange?: ChangeEventHandler<HTMLInputElement>
	onBlur?: () => void
}

const InputField: React.FC<InputFieldProps> = ({
	label,
	type = "text",
	placeholder,
	validationRules,
	value,
	onChange,
	onBlur,
	...props
}): JSX.Element => {
	const {
		onBlur: onBlurValidate,
		error: validateError,
		isValid,
	} = useInput(value || "", validationRules || [])

	return (
		<div className={styles.field}>
			{label && (
				<label className={styles.inputLabel} htmlFor={props.id || "input"}>
					{label}
				</label>
			)}

			<input
				{...props}
				id={props.id || "input"}
				type={type}
				value={value}
				onChange={onChange}
				onBlur={() => {
					if (onBlur) onBlur()
					onBlurValidate()
				}}
				placeholder={placeholder}
				className={clsx(
					styles.input,
					isValid && styles.input_valid,
					!isValid && styles.input_invalid
				)}
			/>

			{!isValid && <span className={styles.errorLabel}>{validateError}</span>}
		</div>
	)
}
InputField.displayName = "InputField"

export default InputField
