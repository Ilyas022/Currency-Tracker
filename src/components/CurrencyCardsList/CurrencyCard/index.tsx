import { useCallback, useState } from 'react'

import { Icon } from 'components/Icon'
import PopUp from 'components/PopUp'

import { CurrencyComp, CurrencyTitle, CurrencyValue, CurrencyIcon } from './styled'
import { CurrencyCardProps } from './types'

function CurrencyCard({ base, code, name, value }: CurrencyCardProps) {
	const [isPopUpOpened, setPopUpOpened] = useState(false)

	const handleClick = () => {
		setPopUpOpened(true)
	}

	const handleClose = useCallback(() => {
		setPopUpOpened(false)
	}, [])

	return (
		<>
			<CurrencyComp onClick={handleClick}>
				<CurrencyIcon>
					<Icon name={`${code}Icon`} />
				</CurrencyIcon>
				<div>
					<CurrencyTitle>{name}</CurrencyTitle>
					<CurrencyValue>
						R
						<Icon name={`${base}Icon`} /> = {value.toFixed(2)}
					</CurrencyValue>
				</div>
			</CurrencyComp>
			{isPopUpOpened && <PopUp handleClose={handleClose} code={code} />}
		</>
	)
}

export default CurrencyCard
