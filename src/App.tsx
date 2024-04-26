import { Route, Routes } from 'react-router-dom'

import Contacts from 'components/Contacts'
import CurrencyCardsList from 'components/CurrencyCardsList'
import { Layout } from 'components/Layout'
import Map from 'components/Map'
import {
	BANK_PAGE_ROUTE,
	CONTACTS_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	TIMELINE_PAGE_ROUTE,
} from 'constants/routes'

import TimelinePage from './pages/TimelinePage'

import 'react-toastify/dist/ReactToastify.min.css'

export function App() {
	return (
		<Routes>
			<Route path={HOME_PAGE_ROUTE} element={<Layout />}>
				<Route index element={<CurrencyCardsList />} />
				<Route path={TIMELINE_PAGE_ROUTE} element={<TimelinePage />} />
				<Route path={BANK_PAGE_ROUTE} element={<Map />} />
				<Route path={CONTACTS_PAGE_ROUTE} element={<Contacts />} />
				<Route path="*" element={<p>not found page</p>} />
			</Route>
		</Routes>
	)
}
