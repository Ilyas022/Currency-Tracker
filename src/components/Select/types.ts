export interface DateSelectProps {
	options: {
		value: string
		label: string
	}[]
	placeholder: string
	handleSelect: (code: string) => void
	defaultValue?: { value: string; label: string }
}
