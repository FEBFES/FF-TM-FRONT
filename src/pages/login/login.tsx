import React, { useState } from "react"
import { Button, InputField, SectionHeader } from "@components"
import styles from "./login.module.css"
import { NavLink } from "react-router-dom"
import { useAppDispatch } from "@/__data__/hooks"
import { fetchLoginThunk } from "./__data__/login.thunk"
import { loginInputValidation } from "./utils/login-validation"

const Login: React.FC = (): JSX.Element => {
	const [username, setUsername] = useState<string>("")
	const [password, setPassword] = useState<string>("")

	const dispatch = useAppDispatch()

	const loginHandler = () => {
		dispatch(fetchLoginThunk({ username, password }))
	}

	return (
		<div className={styles.page}>
			<div className={styles.page__form}>
				<SectionHeader title="Sign in to FF" />
				<InputField
					label="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					validationRules={loginInputValidation}
				/>
				<InputField
					label="Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					validationRules={loginInputValidation}
				/>
				<Button onClick={loginHandler} type="submit" title="Sign in" />

				<span>
					Don't have an account? <NavLink>Sign up</NavLink>
				</span>
			</div>
		</div>
	)
}

export default Login
