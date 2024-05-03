import Select, { StylesConfig } from 'react-select'

import { colors } from 'src/constants/theme'

import { CurrencySelectProps } from './types'

const colourStyles: StylesConfig = {
	control: (styles) => ({ ...styles, backgroundColor: colors.selectBg }),
	menu: (styles) => ({ ...styles, background: colors.selectBg }),
	placeholder: (styles) => ({ ...styles }),
	option: (styles) => ({
		...styles,
		'&:hover': {
			backgroundColor: colors.selectHover,
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
