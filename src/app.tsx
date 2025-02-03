import React from "react"
import { Provider } from "react-redux"
import { store } from "./__data__/store"
import { AppRouter } from "@routes"

const App: React.FC = (): JSX.Element => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	)
}

export default App
