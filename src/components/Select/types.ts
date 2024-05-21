export interface SelectState<T> {
	isDropDownOpen: boolean
	active: null | T
	options: T[]
}

export interface SelectProps<T> {
	position?: 'top' | 'bottom'
	options: T[]
	value: T
	onSelect: (option: T) => void
	onInput?: (value: string) => void
	placeHolder?: string
	isDisabled?: boolean
}
