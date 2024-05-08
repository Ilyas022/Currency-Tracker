import { Route, Routes } from 'react-router-dom'

import { Layout } from 'components/Layout'
import { HOME_PAGE_ROUTE, routes } from 'constants/routes'

import 'react-toastify/dist/ReactToastify.min.css'

export function App() {
	return (
		<Routes>
			<Route path={HOME_PAGE_ROUTE} element={<Layout />}>
				{routes.map(({ element, path, id }) => (
					<Route key={id} path={path} element={element} />
				))}
			</Route>
		</Routes>
	)
}
