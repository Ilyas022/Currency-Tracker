import Introduction from 'components/Header/Introduction'
import Logo from 'components/Header/Logo'
import Navbar from 'components/Header/Navbar'
import { ThemeToggler } from 'components/Header/ThemeToggler'
import UpdateTime from 'components/Header/UpdateTime'

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
