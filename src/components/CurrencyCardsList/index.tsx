import { useEffect } from 'react'

import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'

import CurrencyCard from './CurrencyCard'
import { StyledCurrencyList, StyledListContainer, StyledListTitle } from './styled'

function CurrencyCardsList() {
	const { fetchCurrencyList } = useActions()
	const { currencyList, baseCurrency } = useTypedSelector((stete) => stete.currency)

	useEffect(() => {
		fetchCurrencyList()
	}, [])

	return (
		<StyledCurrencyList>
			<StyledListTitle>Quotes</StyledListTitle>
			<StyledListContainer>
				{currencyList.map(({ code, name, value }) => (
					<CurrencyCard code={code} name={name} value={value} key={code} base={baseCurrency} />
				))}
			</StyledListContainer>
		</StyledCurrencyList>
	)
}

export default CurrencyCardsList
