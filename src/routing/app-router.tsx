import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedRoute, ROUTES_URL } from "@/routing"
import { ProjectsPage, LoginPage } from "@pages"
import LandingPage from "@/pages/landing/landing"

const AppRouter: React.FC = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<LandingPage />} />
				<Route path={ROUTES_URL.landing} element={<LandingPage />} />
				<Route path={ROUTES_URL.login} element={<LoginPage />} />

				<Route
					path={ROUTES_URL.projects}
					element={
						<ProtectedRoute>
							<ProjectsPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path={ROUTES_URL.project}
					element={<ProtectedRoute>ProjectPage</ProtectedRoute>}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter
