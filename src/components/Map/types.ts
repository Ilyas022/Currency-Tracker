export interface Currency {
	label: string
	value: string
}

export interface MapState {
	currency: Currency
	isLoading: boolean
	popup: {
		isOpen: boolean
		name: string
		latitude: number
		longitude: number
	}
}
