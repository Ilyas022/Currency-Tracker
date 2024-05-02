import React from 'react'
import { StylesConfig, default as ReactSelect } from 'react-select'

import { DateSelectProps } from './types'

const colourStyles: StylesConfig = {
	control: (styles) => ({ ...styles, backgroundColor: 'transparent' }),
	menu: (styles) => ({ ...styles, background: 'black', zIndex: 5 }),
	container: (styles) => ({ ...styles, fontSize: '14px' }),
	input: (styles) => ({ ...styles, color: '#fff' }),
	placeholder: (styles) => ({ ...styles, color: 'white' }),
	singleValue: (styles) => ({ ...styles, color: 'white' }),
	option: (styles, { isFocused }) => ({
		...styles,
		backgroundColor: isFocused ? '#00bc4f' : 'transparent',
		'&:hover': {
			backgroundColor: '#02391a',
		},
	}),
}

class Select extends React.PureComponent<DateSelectProps> {
	render() {
		const { defaultValue, options, handleSelect, placeholder } = this.props
		return (
			<ReactSelect
				placeholder={placeholder}
				options={options}
				styles={colourStyles}
				onChange={(e) => {
					// @ts-ignore
					handleSelect(e.value)
				}}
				defaultValue={defaultValue || ''}
			/>
		)
	}
}

export default Select
