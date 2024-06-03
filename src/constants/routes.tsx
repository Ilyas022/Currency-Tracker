import Contacts from 'components/Contacts'
import CurrencyCardsList from 'components/CurrencyCardsList'
import Map from 'components/Map'
import TimelinePage from 'src/pages/TimelinePage'
import { NotFoundText } from 'src/styles/global.styles'

export const HOME_PAGE_ROUTE = `/`
export const TIMELINE_PAGE_ROUTE = `/timeline`
export const BANK_PAGE_ROUTE = `/bank`
export const CONTACTS_PAGE_ROUTE = `/contacts`
export const MARKET_PAGE_ROUTE = `/market`
export const SERVICE_PAGE_ROUTE = `/service`
export const SPARKS_PAGE_ROUTE = `/sparks`
export const SNAPS_PAGE_ROUTE = `/snaps`
export const IDEAS_PAGE_ROUTE = `/ideas`
export const STREAMS_PAGE_ROUTE = `/streams`

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
		element: <NotFoundText>not found page</NotFoundText>,
	},
]
