import { forwardRef, ChangeEventHandler, InputHTMLAttributes } from "react"

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	onChange?: ChangeEventHandler<HTMLInputElement>
}

const TextField = forwardRef<HTMLInputElement, InputFieldProps>(
	({ label, type = "text", value, onChange, placeholder, ...props }, ref) => {
		return (
			<div className="input-field">
				{label && <label htmlFor={props.id || "input"}>{label}</label>}

				<input
					{...props}
					ref={ref}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className="input"
				/>
			</div>
		)
	}
)
TextField.displayName = "InputField"

export default TextField
