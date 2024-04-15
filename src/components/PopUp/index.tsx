import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { useActions } from 'hooks/useActions'
import { useScrollLock } from 'hooks/useScrollLock'
import { useTypedSelector } from 'hooks/useTypedSelector'

import CurrencySelect from './CurrencySelect'
import {
	StyledCloseBtn,
	StyledExchangeItem,
	StyledPopUp,
	StyledPopUpBody,
	StyledPopUpContainer,
	StyledPopUpHeader,
} from './styled'

interface IPopUp {
	handleClose: () => void
	code: string
}

function PopUp({ code, handleClose }: IPopUp) {
	const { fetchCurrencyExchange } = useActions()
	const [currency, setCurrency] = useState(code)
	const { currencyExchangeList } = useTypedSelector((state) => state.currency)

	const [lockScroll, unlockScroll] = useScrollLock()

	useEffect(() => {
		lockScroll()
		return () => unlockScroll()
	}, [])

	useEffect(() => {
		fetchCurrencyExchange(currency)
	}, [currency])

	const handleSelect = (currencyCode: string) => {
		setCurrency(currencyCode)
	}

	return createPortal(
		<StyledPopUp>
			<StyledPopUpContainer>
				<StyledPopUpHeader>
					<p>Сurrency exchange</p>
					<StyledCloseBtn onClick={handleClose} />
				</StyledPopUpHeader>
				<StyledPopUpBody>
					{currencyExchangeList.map((item) => (
						<StyledExchangeItem key={item.code}>
							<p>
								{item.code} <span>to</span> {currency}
							</p>
							<p>{item.value % 1 === 0 ? item.value : item.value.toFixed(4)}</p>
						</StyledExchangeItem>
					))}
					<CurrencySelect options={currencyExchangeList} handleSelect={handleSelect} />
				</StyledPopUpBody>
			</StyledPopUpContainer>
		</StyledPopUp>,
		document.getElementById('popup-root')!
	)
}

export default PopUp
