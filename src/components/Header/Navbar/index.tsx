import {
	BANK_PAGE_ROUTE,
	CONTACTS_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	TIMELINE_PAGE_ROUTE,
} from 'constants/routes'

import { NavbarComp, Navlink } from './styled'

function Navbar() {
	return (
		<NavbarComp>
			<Navlink to={HOME_PAGE_ROUTE}>Home</Navlink>
			<Navlink to={TIMELINE_PAGE_ROUTE}>Timeline</Navlink>
			<Navlink to={BANK_PAGE_ROUTE}>Bank card</Navlink>
			<Navlink to={CONTACTS_PAGE_ROUTE}>Contats</Navlink>
		</NavbarComp>
	)
}

export default Navbar
