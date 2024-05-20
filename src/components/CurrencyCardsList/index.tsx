import { useEffect } from 'react'

import { ErrorBoundary } from 'components/ErrorBoundary'
import LoadingSpinner from 'components/LoadingSpinner'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectCurrency } from 'store/selectors/currencySelectors'

import CurrencyCard from './CurrencyCard'
import { CurrencyList, ListContainer, ListTitle } from './styled'

function CurrencyCardsList() {
	const { fetchCurrencyList } = useActions()
	const { currencyList, baseCurrency, status } = useTypedSelector(selectCurrency)
	const isLoading = status === 'loading'

	useEffect(() => {
		if (!currencyList.length) fetchCurrencyList()
	}, [])

	return (
		<CurrencyList>
			<ListTitle>Quotes</ListTitle>
			<ErrorBoundary fallback={<p>Something went wrong!</p>}>
				{isLoading && <LoadingSpinner />}
				<ListContainer>
					{currencyList &&
						currencyList.map(({ code, label, value }) => (
							<CurrencyCard
								code={code}
								label={label}
								value={value}
								key={code}
								base={baseCurrency}
							/>
						))}
					{!currencyList && <p>Something went wrong!</p>}
				</ListContainer>
			</ErrorBoundary>
		</CurrencyList>
	)
}

export default CurrencyCardsList
