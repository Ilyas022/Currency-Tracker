import React from 'react'

import { DropDownItem, DropDownMenu, SearchBar } from './styled'
import { DivRefProp, DropDownProps } from './types'

class DropDown<T extends { label: string; value: string | number }> extends React.Component<
	DropDownProps<T>
> {
	itemsEl: React.RefObject<HTMLDivElement>

	activeRef: React.RefObject<HTMLDivElement>

	inputRef: React.RefObject<HTMLInputElement>

	constructor(props: DropDownProps<T>) {
		super(props)
		this.inputRef = React.createRef()
		this.activeRef = React.createRef()
		this.itemsEl = React.createRef()
	}

	componentDidMount(): void {
		this.inputRef.current?.focus()
		if (this.activeRef.current && this.itemsEl.current) {
			this.itemsEl.current.scrollTop = this.activeRef.current.offsetTop - 42
		}
	}

	handleSelect = (option: T) => {
		const { onSelect } = this.props
		onSelect(option)
	}

	handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { onInput } = this.props
		onInput(e.target.value)
	}

	render() {
		const { active, options, placeHolder, position } = this.props

		return (
			<DropDownMenu $position={position}>
				<div ref={this.itemsEl}>
					{options.map((option) => {
						const isActive = option.value === active?.value
						const props: DivRefProp = {}
						if (isActive) {
							props.ref = this.activeRef
						}
						return (
							<DropDownItem
								{...props}
								key={option.value}
								// eslint-disable-next-line react/jsx-no-bind
								onClick={this.handleSelect.bind(this, option)}
								$isActive={isActive}
							>
								{option.label}
							</DropDownItem>
						)
					})}
				</div>
				<SearchBar
					ref={this.inputRef}
					type="text"
					placeholder={placeHolder}
					onChange={this.handleInput}
				/>
			</DropDownMenu>
		)
	}
}

export default DropDown
