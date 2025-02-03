import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedRoute, ROUTES_URL } from "@routes"
import { ProjectsPage, LoginPage } from "@pages"

const AppRouter: React.FC = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route path={ROUTES_URL.home} element={<>home page</>} />
					<Route path={ROUTES_URL.info} element={<>info page</>} />
					<Route path={ROUTES_URL.login} element={<LoginPage />} />
				</Route>

				<Route>
					<Route
						path={ROUTES_URL.projects}
						element={
							<ProtectedRoute>
								<ProjectsPage />
							</ProtectedRoute>
						}
					/>
					<Route path={ROUTES_URL.project} element={<>ProjectPage</>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter
