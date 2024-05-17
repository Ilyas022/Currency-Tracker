import { useEffect, useState } from 'react'

import PopUp from 'components/PopUp'
import Select from 'components/Select'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectCurrency } from 'store/selectors'
import { ResponseDataItem } from 'types/interfaces'

import { ExchangeItem } from './styled'
import { CurrencyOption, CurrencyPopUpProps } from './types'

function CurrencyPopUp({ currency, handleClose }: CurrencyPopUpProps) {
	const { currencyExchangeList } = useTypedSelector(selectCurrency)
	const { fetchCurrencyExchange } = useActions()
	const [selectedCurrency, setSelectedCurrency] = useState(currency)

	const data = currencyExchangeList[selectedCurrency.code]

	useEffect(() => {
		if (!data) {
			fetchCurrencyExchange(selectedCurrency.code)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedCurrency])

	const handleSelect = (curr: CurrencyOption) => {
		setSelectedCurrency(curr)
	}

	return (
		<PopUp title="Сurrency exchange" handleClose={handleClose}>
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
					<Select<ResponseDataItem>
						position="top"
						value={selectedCurrency}
						options={data}
						onSelect={handleSelect}
					/>
				</>
			)}
		</PopUp>
	)
}

export default CurrencyPopUp
