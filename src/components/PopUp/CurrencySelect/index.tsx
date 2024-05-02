import Select, { StylesConfig } from 'react-select'

import { CurrencySelectProps } from './types'

const colourStyles: StylesConfig = {
	control: (styles) => ({ ...styles, backgroundColor: '#a0a0a0' }),
	menu: (styles) => ({ ...styles, background: '#a0a0a0' }),
	placeholder: (styles) => ({ ...styles }),
	option: (styles) => ({
		...styles,
		'&:hover': {
			backgroundColor: '#626262',
		},
	}),
}

function CurrencySelect({ options, handleSelect }: CurrencySelectProps) {
	const selectOptions = options.map((option) => ({
		label: `${option.name} (${option.code})`,
		value: option.code,
	}))

	return (
		<Select
			options={selectOptions}
			styles={colourStyles}
			menuPlacement="top"
			onChange={(e) => {
				// @ts-ignore
				handleSelect(e.value)
			}}
		/>
	)
}

export default CurrencySelect
