export interface DropDownProps<T extends { label: string; value: string | number }> {
	placeHolder: string
	onInput: (value: string) => void
	onSelect: (item: T) => void
	options: T[]
	active: T | null
	position: 'top' | 'bottom'
}

export interface DivRefProp {
	ref?: React.RefObject<HTMLDivElement>
}
