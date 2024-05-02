export interface ObserverData {
	isLoaded: boolean
	isError?: boolean
}

export interface Observer {
	(data: ObserverData): void
}
