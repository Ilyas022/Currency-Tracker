import Introduction from 'components/Header/Introduction'
import Navbar from 'components/Header/Navbar'
import { ThemeToggler } from 'components/Header/ThemeToggler'
import UpdateTime from 'components/Header/UpdateTime'
import Logo from 'components/Logo'

import { StyledHeader, StyledHeaderContainer } from './styled'

function Header() {
	return (
		<StyledHeader>
			<StyledHeaderContainer>
				<Logo />
				<Navbar />
				<ThemeToggler />
			</StyledHeaderContainer>
			<Introduction />
			<UpdateTime />
		</StyledHeader>
	)
}

export default Header
