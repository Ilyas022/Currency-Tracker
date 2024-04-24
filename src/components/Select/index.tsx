import React from 'react'
import { StylesConfig, default as ReactSelect } from 'react-select'

interface IDateSelect {
	options: {
		value: string
		label: string
	}[]
	placeholder: string
	handleSelect: (code: string) => void
	defaultValue?: { value: string; label: string }
}

const colourStyles: StylesConfig = {
	control: (styles) => ({ ...styles, backgroundColor: 'transparent' }),
	menu: (styles) => ({ ...styles, background: 'black' }),
	container: (styles) => ({ ...styles, fontSize: '14px' }),
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

class Select extends React.PureComponent<IDateSelect> {
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
