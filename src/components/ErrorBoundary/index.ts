import { Component, ReactNode } from 'react'

interface IProps {
	fallback?: ReactNode
	children: ReactNode
}

interface IState {
	hasError: boolean
}

export class ErrorBoundary extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		console.log('error catched')
		return { hasError: true }
	}

	static componentDidCatch() {
		console.log('error catched')
		return { hasError: true }
	}

	render() {
		const { hasError } = this.state
		const { children, fallback } = this.props
		if (hasError) {
			return fallback
		}

		return children
	}
}
