import { useEffect } from 'react'

import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectCurrency } from 'store/selectors'

import CurrencyCard from './CurrencyCard'
import { CurrencyList, ListContainer, ListTitle } from './styled'

function CurrencyCardsList() {
	const { fetchCurrencyList } = useActions()
	const { currencyList, baseCurrency } = useTypedSelector(selectCurrency)

	useEffect(() => {
		fetchCurrencyList()
	}, [])

	return (
		<CurrencyList>
			<ListTitle>Quotes</ListTitle>
			<ListContainer>
				{currencyList.map(({ code, name, value }) => (
					<CurrencyCard code={code} name={name} value={value} key={code} base={baseCurrency} />
				))}
			</ListContainer>
		</CurrencyList>
	)
}

export default CurrencyCardsList
