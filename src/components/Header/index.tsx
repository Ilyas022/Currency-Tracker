import { useState } from 'react'

import Introduction from 'components/Header/Introduction'
import Navbar from 'components/Header/Navbar'
import { ThemeToggler } from 'components/Header/ThemeToggler'
import UpdateTime from 'components/Header/UpdateTime'
import Logo from 'components/Logo'

import MenuBurger from './MenuBurger'
import BurgerButton from './MenuBurger/BurgerBtn'
import { HeaderComp, HeaderContainer } from './styled'

function Header() {
	const [isMenuOpened, setMenuOpened] = useState(false)

	const handleOpen = () => {
		setMenuOpened((prev) => !prev)
	}
	return (
		<HeaderComp>
			<HeaderContainer>
				<Logo />
				<Navbar />
				<ThemeToggler />

				<BurgerButton isOpened={isMenuOpened} setOpened={handleOpen} />
			</HeaderContainer>
			<Introduction />
			<UpdateTime />

			<MenuBurger handleOpen={handleOpen} isOpened={isMenuOpened} />
		</HeaderComp>
	)
}

export default Header
