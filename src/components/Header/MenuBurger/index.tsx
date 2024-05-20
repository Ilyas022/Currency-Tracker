import { useEffect } from 'react'

import { useScrollLock } from 'hooks/useScrollLock'

import { Menu } from './styled'
import { MenuBurgerProps } from './types'
import { links } from '../Navbar/config'
import { Navlink } from '../Navbar/styled'
import { ThemeToggler } from '../ThemeToggler'

function MenuBurger({ isOpened, handleOpen }: MenuBurgerProps) {
	const [lockScroll, unlockScroll] = useScrollLock()

	useEffect(() => {
		if (isOpened) {
			lockScroll()
		}

		return () => unlockScroll()
	}, [lockScroll, unlockScroll, isOpened])

	return (
		<Menu $open={isOpened}>
			<ThemeToggler />
			{links.map(({ path, title }) => (
				<Navlink onClick={handleOpen} key={path} to={path}>
					{title}
				</Navlink>
			))}
		</Menu>
	)
}

export default MenuBurger
