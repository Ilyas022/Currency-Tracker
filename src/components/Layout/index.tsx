import { Outlet } from 'react-router'

import Footer from 'components/Footer'
import Header from 'components/Header'
import { StyledToastContainer } from 'src/styles/global.styles'

export function Layout() {
	return (
		<>
			<Header />
			<main>
				<StyledToastContainer
					position="bottom-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable={false}
					pauseOnHover
					// theme="light"
				/>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
