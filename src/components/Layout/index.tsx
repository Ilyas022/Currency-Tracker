import { Outlet } from 'react-router'

import Footer from 'components/Footer'
import Header from 'components/Header'
import { StyledToastContainer } from 'src/styles/global.styles'

import { toastContainerConfig } from './config'

export function Layout() {
	return (
		<>
			<Header />
			<main>
				<StyledToastContainer {...toastContainerConfig} />
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
