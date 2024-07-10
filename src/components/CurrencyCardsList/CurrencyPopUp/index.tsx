import { useEffect, useState } from 'react'

import PopUp from 'components/PopUp'
import Select from 'components/Select'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectCurrency } from 'store/selectors/currencySelectors'
import { ResponseDataItem } from 'types/interfaces'

import { Amount, Currencies, ExchangeItem } from './styled'
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
	}, [selectedCurrency])

	const handleSelect = (curr: CurrencyOption) => {
		setSelectedCurrency(curr)
	}

	return (
		<PopUp title="Сurrency exchange" handleClose={handleClose}>
			{data && (
				<>
					{data.map((item) => {
						const isInt = item.value % 1 === 0

						return (
							<ExchangeItem data-testid="exchange item" key={item.code}>
								<Currencies>
									{item.code} <span>to</span> {selectedCurrency.code}
								</Currencies>
								<Amount>{isInt ? item.value : item.value.toFixed(4)}</Amount>
							</ExchangeItem>
						)
					})}
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
