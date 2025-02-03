import React from "react"
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../__data__/hooks"
import { getIsAuthenticated } from "../__data__/features/auth/auth-selector"

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
