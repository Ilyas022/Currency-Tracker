/* eslint-disable camelcase */

import React from 'react'

import PopUp from 'components/PopUp'

import { config } from './config'
import { FormContainer, FormItem, SubmitBtn } from './styled'
import { HistoryDataPopUpProps } from './types'

class HistoryDataPopUp extends React.PureComponent<HistoryDataPopUpProps, {}> {
	constructor(props: HistoryDataPopUpProps) {
		super(props)
		this.state = {}

		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		const { handleAdd } = this.props
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)
		const formObject: {
			time_open: string
			price_open: number
			price_high: number
			price_low: number
			price_close: number
		} = {
			time_open: new Date(formData.get('time_open') as string).toISOString(),
			price_open: Number(formData.get('price_open')),
			price_high: Number(formData.get('price_high')),
			price_low: Number(formData.get('price_low')),
			price_close: Number(formData.get('price_close')),
		}

		handleAdd({
			...formObject,
		})
		e.currentTarget.reset()
	}

	render() {
		const { dataFields } = config
		const { handleClose } = this.props

		return (
			<PopUp handleClose={handleClose} title="Add history data">
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<FormContainer>
						{dataFields.map(({ id, type, text }) => (
							<FormItem key={id}>
								<input id={id} name={id} type={type} />
								<label htmlFor={id}>
									<span>{text}</span>
								</label>
							</FormItem>
						))}
					</FormContainer>

					<SubmitBtn type="submit">Add item</SubmitBtn>
				</form>
			</PopUp>
		)
	}
}

export default HistoryDataPopUp
