import React from 'react'
import { StylesConfig, default as ReactSelect } from 'react-select'
import { withTheme } from 'styled-components'

import { DateSelectProps } from './types'

class Select extends React.PureComponent<DateSelectProps> {
	render() {
		const { defaultValue, options, handleSelect, placeholder, theme, isActive } = this.props

		const colourStyles: StylesConfig = {
			control: (styles) => ({ ...styles, backgroundColor: 'transparent' }),
			menu: (styles) => ({ ...styles, background: theme.colors.primary, zIndex: 5 }),
			container: (styles) => ({ ...styles, fontSize: '14px' }),
			input: (styles) => ({ ...styles, color: theme.colors.textPrimary }),
			placeholder: (styles) => ({ ...styles, color: theme.colors.textPrimary }),
			singleValue: (styles) => ({ ...styles, color: theme.colors.textPrimary }),
			option: (styles, { isFocused }) => ({
				...styles,
				backgroundColor: isFocused ? '#00bc4f' : 'transparent',
				'&:hover': {
					backgroundColor: '#5bd28d',
				},
			}),
		}

		return (
			<ReactSelect
				isDisabled={!isActive}
				placeholder={isActive ? placeholder : ''}
				options={isActive ? options : []}
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

export default withTheme(Select)
