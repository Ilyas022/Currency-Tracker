import { links } from './config'
import { NavbarComp, Navlink } from './styled'

function Navbar() {
	return (
		<NavbarComp>
			{links.map(({ path, title }) => (
				<Navlink data-testid="navLink" key={path} to={path}>
					{title}
				</Navlink>
			))}
		</NavbarComp>
	)
}

export default Navbar
