import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { useActions } from 'hooks/useActions'
import { useScrollLock } from 'hooks/useScrollLock'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectCurrency } from 'store/selectors'

import CurrencySelect from './CurrencySelect'
import { CloseBtn, ExchangeItem, PopUpComp, PopUpBody, PopUpContainer, PopUpHeader } from './styled'
import { PopUpProps } from './types'

function PopUp({ currency, handleClose }: PopUpProps) {
	const { fetchCurrencyExchange } = useActions()
	const [selectedCurrency, setSelectedCurrency] = useState(currency)
	const { currencyExchangeList } = useTypedSelector(selectCurrency)
	const [lockScroll, unlockScroll] = useScrollLock()

	const data = currencyExchangeList[selectedCurrency.code]

	useEffect(() => {
		lockScroll()
		return () => unlockScroll()
	}, [])

	useEffect(() => {
		if (!data) {
			fetchCurrencyExchange(selectedCurrency.code)
		}
	}, [selectedCurrency])

	const handleSelect = (curr: typeof selectedCurrency) => {
		setSelectedCurrency(curr)
	}

	return createPortal(
		<PopUpComp>
			<PopUpContainer>
				<PopUpHeader>
					<p>Сurrency exchange</p>
					<CloseBtn onClick={handleClose} />
				</PopUpHeader>
				<PopUpBody>
					{data && (
						<>
							{data.map((item) => (
								<ExchangeItem key={item.code}>
									<p>
										{item.code} <span>to</span> {selectedCurrency.code}
									</p>
									<p>{item.value % 1 === 0 ? item.value : item.value.toFixed(4)}</p>
								</ExchangeItem>
							))}
							<CurrencySelect options={data} value={selectedCurrency} handleSelect={handleSelect} />
						</>
					)}
				</PopUpBody>
			</PopUpContainer>
		</PopUpComp>,
		document.getElementById('popup-root')!
	)
}

export default PopUp
