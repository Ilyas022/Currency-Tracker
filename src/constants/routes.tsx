import Contacts from 'components/Contacts'
import CurrencyCardsList from 'components/CurrencyCardsList'
import Map from 'components/Map'
import TimelinePage from 'src/pages/TimelinePage'

export const HOME_PAGE_ROUTE = `/`
export const TIMELINE_PAGE_ROUTE = `/timeline`
export const BANK_PAGE_ROUTE = `/bank`
export const CONTACTS_PAGE_ROUTE = `/contacts`

export const routes = [
	{
		id: 0,
		path: HOME_PAGE_ROUTE,
		element: <CurrencyCardsList />,
	},
	{
		id: 1,
		path: TIMELINE_PAGE_ROUTE,
		element: <TimelinePage />,
	},
	{
		id: 2,
		path: BANK_PAGE_ROUTE,
		element: <Map />,
	},
	{
		id: 3,
		path: CONTACTS_PAGE_ROUTE,
		element: <Contacts />,
	},
	{
		id: 4,
		path: '*',
		element: <p>not found page</p>,
	},
]
