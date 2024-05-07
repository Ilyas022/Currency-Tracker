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

function CurrencySelect({ options, handleSelect, value }: CurrencySelectProps) {
	const selectOptions = options.map((option) => ({
		label: `${option.label} (${option.code})`,
		value: option.value,
		code: option.code,
	}))

	return (
		<Select
			options={selectOptions}
			styles={colourStyles}
			menuPlacement="top"
			value={value}
			onChange={(e) => {
				// @ts-ignore
				handleSelect(e)
			}}
		/>
	)
}

export default CurrencySelect
