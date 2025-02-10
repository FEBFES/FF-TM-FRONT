import React from "react"
import { Navigate } from "react-router-dom"
import { getIsAuthenticated } from "@/pages/login/__data__/login.selector"
import { useAppSelector } from "@/__data__/hooks"

interface ProtectedRouteProps {
	children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }): JSX.Element => {
	const isAuthenticated = useAppSelector(getIsAuthenticated)

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />
	}

	return <>{children}</>
}

export default ProtectedRoute
