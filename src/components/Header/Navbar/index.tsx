import {
	BANK_PAGE_ROUTE,
	CONTACTS_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	TIMELINE_PAGE_ROUTE,
} from 'constants/routes'

import { StyledNavbar, StyledNavlink } from './styled'

function Navbar() {
	return (
		<StyledNavbar>
			<StyledNavlink to={HOME_PAGE_ROUTE}>Home</StyledNavlink>
			<StyledNavlink to={TIMELINE_PAGE_ROUTE}>Timeline</StyledNavlink>
			<StyledNavlink to={BANK_PAGE_ROUTE}>Bank card</StyledNavlink>
			<StyledNavlink to={CONTACTS_PAGE_ROUTE}>Contats</StyledNavlink>
		</StyledNavbar>
	)
}

export default Navbar
