import { StyledNavbar, StyledNavlink } from './styled'

function Navbar() {
	return (
		<StyledNavbar>
			<StyledNavlink to="/">Home</StyledNavlink>
			<StyledNavlink to="/">Timeline</StyledNavlink>
			<StyledNavlink to="/">Bank card</StyledNavlink>
			<StyledNavlink to="/">Contato</StyledNavlink>
		</StyledNavbar>
	)
}

export default Navbar
