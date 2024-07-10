import { useCallback, useState } from 'react'

import { Icons } from './config'
import {
	CurrencyComp,
	CurrencyTitle,
	CurrencyValue,
	CurrencyIcon,
	CurrencyContainer,
} from './styled'
import { CurrencyCardProps } from './types'
import CurrencyPopUp from '../CurrencyPopUp'

function CurrencyCard({ base, code, label, value }: CurrencyCardProps) {
	const [isPopUpOpened, setPopUpOpened] = useState(false)
	const currency = { code, label, value }

	const handleClick = () => {
		setPopUpOpened(true)
	}

	const handleClose = useCallback(() => {
		setPopUpOpened(false)
	}, [])

	return (
		<>
			<CurrencyComp data-testid="currency card" onClick={handleClick}>
				<CurrencyIcon>{Icons[code]}</CurrencyIcon>
				<CurrencyContainer>
					<CurrencyTitle>{label}</CurrencyTitle>
					<CurrencyValue>
						R{Icons[base]} = {value.toFixed(2)}
					</CurrencyValue>
				</CurrencyContainer>
			</CurrencyComp>
			{isPopUpOpened && <CurrencyPopUp handleClose={handleClose} currency={currency} />}
		</>
	)
}

export default CurrencyCard
