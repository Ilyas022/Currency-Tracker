import { Outlet } from 'react-router'

import Footer from 'components/Footer'
import Header from 'components/Header'
import { StyledToastContainer } from 'src/styles/global.styles'

import { toastContainerConfig } from './config'
import { StyledWrapper } from './styled'

export function Layout() {
	return (
		<StyledWrapper>
			<Header />
			<main>
				<StyledToastContainer {...toastContainerConfig} />
				<Outlet />
			</main>
			<Footer />
		</StyledWrapper>
	)
}
