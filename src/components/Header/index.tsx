import Introduction from 'components/Header/Introduction'
import Logo from 'components/Header/Logo'
import Navbar from 'components/Header/Navbar'
import { ThemeToggler } from 'components/Header/ThemeToggler'
import UpdateTime from 'components/Header/UpdateTime'

import { StyledHeaderContainer } from './styled'

function Header() {
	return (
		<header>
			<StyledHeaderContainer>
				<Logo />
				<Navbar />
				<ThemeToggler />
			</StyledHeaderContainer>
			<Introduction />
			<UpdateTime />
		</header>
	)
}

export default Header
