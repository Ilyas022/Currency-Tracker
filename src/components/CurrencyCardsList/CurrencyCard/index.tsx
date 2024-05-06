import { useCallback, useState } from 'react'

import PopUp from 'components/PopUp'

import { Icons } from './config'
import { CurrencyComp, CurrencyTitle, CurrencyValue, CurrencyIcon } from './styled'
import { CurrencyCardProps } from './types'

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
			<CurrencyComp onClick={handleClick}>
				<CurrencyIcon>{Icons[code]}</CurrencyIcon>
				<div>
					<CurrencyTitle>{label}</CurrencyTitle>
					<CurrencyValue>
						R{Icons[base]} = {value.toFixed(2)}
					</CurrencyValue>
				</div>
			</CurrencyComp>
			{isPopUpOpened && <PopUp handleClose={handleClose} currency={currency} />}
		</>
	)
}

export default CurrencyCard
