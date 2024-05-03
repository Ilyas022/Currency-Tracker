import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { useActions } from 'hooks/useActions'
import { useScrollLock } from 'hooks/useScrollLock'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectCurrency } from 'store/selectors'

import CurrencySelect from './CurrencySelect'
import { CloseBtn, ExchangeItem, PopUpComp, PopUpBody, PopUpContainer, PopUpHeader } from './styled'
import { PopUpProps } from './types'

function PopUp({ code, handleClose }: PopUpProps) {
	const { fetchCurrencyExchange } = useActions()
	const [currency, setCurrency] = useState(code)
	const { currencyExchangeList } = useTypedSelector(selectCurrency)

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
		<PopUpComp>
			<PopUpContainer>
				<PopUpHeader>
					<p>Сurrency exchange</p>
					<CloseBtn onClick={handleClose} />
				</PopUpHeader>
				<PopUpBody>
					{currencyExchangeList.map((item) => (
						<ExchangeItem key={item.code}>
							<p>
								{item.code} <span>to</span> {currency}
							</p>
							<p>{item.value % 1 === 0 ? item.value : item.value.toFixed(4)}</p>
						</ExchangeItem>
					))}
					<CurrencySelect options={currencyExchangeList} handleSelect={handleSelect} />
				</PopUpBody>
			</PopUpContainer>
		</PopUpComp>,
		document.getElementById('popup-root')!
	)
}

export default PopUp
