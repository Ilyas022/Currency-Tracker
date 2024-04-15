import CurrencyCardsList from 'components/CurrencyCardsList'
import Footer from 'components/Footer'
import Header from 'components/Header'

export function App() {
	return (
		<>
			<Header />
			<main>
				<CurrencyCardsList />
			</main>
			<Footer />
		</>
	)
}
