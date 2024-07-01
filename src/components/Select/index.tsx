import React from 'react'

import { SelectOption } from 'types/interfaces'

import Dropdown from './DropDown'
import { DropDown, DropDownSelect, SelectItem } from './styled'
import { SelectProps, SelectState } from './types'

class Select<T extends SelectOption> extends React.Component<SelectProps<T>, SelectState<T>> {
	selectRef: React.RefObject<HTMLDivElement>

	constructor(props: SelectProps<T>) {
		super(props)
		const { options, value } = this.props

		this.state = {
			active: value,
			options,
			isDropDownOpen: false,
		}

		this.selectRef = React.createRef<HTMLDivElement>()
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside)
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside)
	}

	handleDropDownToggle = () => {
		const { isDropDownOpen } = this.state
		const { isDisabled = false } = this.props
		if (!isDisabled) {
			this.setState({ isDropDownOpen: !isDropDownOpen })
		}
	}

	handleClickOutside = (e: MouseEvent | TouchEvent) => {
		const { isDropDownOpen } = this.state
		const { options } = this.props

		if (isDropDownOpen && !this.selectRef.current?.contains(e.target as Node)) {
			this.setState({ options, isDropDownOpen: false })
		}
	}

	handleSearch = (value: string) => {
		const { options: propsOptions, onInput } = this.props

		if (value) {
			const lowerCaseValue = value.toLowerCase()
			const filteredOptions = propsOptions.filter((opt) => {
				return (
					(typeof opt.value === 'string' && opt.value.toLowerCase().includes(lowerCaseValue)) ||
					opt.label.toLowerCase().includes(lowerCaseValue)
				)
			})
			this.setState({ options: filteredOptions })
		} else {
			this.setState({ options: propsOptions })
		}
		if (onInput) {
			onInput(value)
		}
	}

	handleSelect = (option: T) => {
		const { options, onSelect } = this.props
		const active = options.find((item) => item.value === option.value)

		if (active) {
			this.setState({ active })
		}
		this.setState({ isDropDownOpen: false })
		onSelect(option)
	}

	render() {
		const { active, options, isDropDownOpen } = this.state
		const { value, position = 'bottom', placeHolder } = this.props
		return (
			<SelectItem ref={this.selectRef}>
				<DropDown>
					<DropDownSelect onClick={this.handleDropDownToggle}>
						{value?.label || placeHolder || 'Please select one option'}
					</DropDownSelect>

					{isDropDownOpen && (
						<Dropdown<T>
							position={position}
							active={active}
							onSelect={this.handleSelect}
							placeHolder={placeHolder || 'Enter'}
							options={options}
							onInput={this.handleSearch}
						/>
					)}
				</DropDown>
			</SelectItem>
		)
	}
}

export default Select
