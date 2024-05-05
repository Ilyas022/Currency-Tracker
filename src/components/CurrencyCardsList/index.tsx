import { useEffect } from 'react'

import { ErrorBoundary } from 'components/ErrorBoundary'
import LoadingSpinner from 'components/LoadingSpinner'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectCurrency } from 'store/selectors'

import CurrencyCard from './CurrencyCard'
import { CurrencyList, ListContainer, ListTitle } from './styled'

function CurrencyCardsList() {
	const { fetchCurrencyList } = useActions()
	const { currencyList, baseCurrency, status } = useTypedSelector(selectCurrency)
	const isLoading = status === 'loading'

	useEffect(() => {
		fetchCurrencyList()
	}, [])

	return (
		<CurrencyList>
			<ListTitle>Quotes</ListTitle>
			<ErrorBoundary fallback={<p>Something went wrong!</p>}>
				{isLoading && <LoadingSpinner />}
				<ListContainer>
					{currencyList.map(({ code, name, value }) => (
						<CurrencyCard code={code} name={name} value={value} key={code} base={baseCurrency} />
					))}
				</ListContainer>
			</ErrorBoundary>
		</CurrencyList>
	)
}

export default CurrencyCardsList
