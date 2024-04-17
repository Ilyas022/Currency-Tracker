import { Outlet } from 'react-router'

import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

export function Layout() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
