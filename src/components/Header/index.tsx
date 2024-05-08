import Introduction from 'components/Header/Introduction'
import Navbar from 'components/Header/Navbar'
import { ThemeToggler } from 'components/Header/ThemeToggler'
import UpdateTime from 'components/Header/UpdateTime'
import Logo from 'components/Logo'

import { HeaderComp, HeaderContainer } from './styled'

function Header() {
	return (
		<HeaderComp>
			<HeaderContainer>
				<Logo />
				<Navbar />
				<ThemeToggler />
			</HeaderContainer>
			<Introduction />
			<UpdateTime />
		</HeaderComp>
	)
}

export default Header
