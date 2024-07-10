import {
	IDEAS_PAGE_ROUTE,
	MARKET_PAGE_ROUTE,
	SERVICE_PAGE_ROUTE,
	SNAPS_PAGE_ROUTE,
	SPARKS_PAGE_ROUTE,
	STREAMS_PAGE_ROUTE,
} from 'constants/routes'

import { FooterLink, FooterLinkContainer, FooterLinkItem, FooterLinkTitle } from './styled'

export const mocks = {
	footerInfo: {
		General: [
			{ name: 'Market', link: MARKET_PAGE_ROUTE },
			{ name: 'Service', link: SERVICE_PAGE_ROUTE },
		],
		Product: [
			{ name: 'Sparks', link: SPARKS_PAGE_ROUTE },
			{ name: 'Snaps', link: SNAPS_PAGE_ROUTE },
		],
		Community: [
			{ name: 'Ideas', link: IDEAS_PAGE_ROUTE },
			{ name: 'Streams', link: STREAMS_PAGE_ROUTE },
		],
	},
	title: 'Modsen Currency Tracker',
	description:
		'Since then, the company has grown organically to. Starsup is the world&apos;s largest trading platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.',
	rights: 'Startsup © 2023-2024, All Rights Reserved',
}

export const footerLinks = Object.entries(mocks.footerInfo).map(([category, items]) => (
	<FooterLinkItem key={category}>
		<FooterLinkTitle>{category}</FooterLinkTitle>
		<FooterLinkContainer>
			{items.map(({ link, name }) => (
				<FooterLink data-testid="footer link" to={link} key={name}>
					{name}
				</FooterLink>
			))}
		</FooterLinkContainer>
	</FooterLinkItem>
))
