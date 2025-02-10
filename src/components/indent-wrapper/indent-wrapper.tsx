import React from "react"

interface IndentWrapperProps {
	children: React.ReactNode
}

const IndentWrapper: React.FC<IndentWrapperProps> = ({ children }): JSX.Element => {
	return <div>{children}</div>
}

export default IndentWrapper
