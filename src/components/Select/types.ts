import { Theme } from 'types/interfaces'

export interface DateSelectProps {
	isActive: boolean
	theme: Theme
	options: {
		value: string
		label: string
	}[]
	placeholder: string
	handleSelect: (code: string) => void
	defaultValue?: { value: string; label: string }
}
