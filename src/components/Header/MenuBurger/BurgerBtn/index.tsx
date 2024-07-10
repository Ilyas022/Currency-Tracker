import { BurgerBtn, BurgerInput, BurgerLabel } from './styled'
import { BurgerBtnProps } from './types'

function BurgerButton({ isOpened, setOpened }: BurgerBtnProps) {
	const handleClick = () => {
		setOpened()
	}

	return (
		<BurgerBtn data-testid="burger btn">
			<BurgerInput id="menuBurger" onChange={handleClick} checked={isOpened} />
			<BurgerLabel htmlFor="menuBurger" />
		</BurgerBtn>
	)
}

export default BurgerButton
