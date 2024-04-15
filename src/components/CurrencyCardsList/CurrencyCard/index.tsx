import { useCallback, useState } from 'react'

import { Icon } from 'components/Icon'
import PopUp from 'components/PopUp'

import { StyledCurrencyCard, StyledCurrencyTitle, StyledCurrencyValue, StyledIcon } from './styled'

interface ICurrencyCard {
	name: string
	value: number
	code: string
	base: string
}

function CurrencyCard({ base, code, name, value }: ICurrencyCard) {
	const [isPopUpOpened, setPopUpOpened] = useState(false)

	const handleClick = () => {
		setPopUpOpened(true)
	}

	const handleClose = useCallback(() => {
		setPopUpOpened(false)
	}, [])

	return (
		<>
			<StyledCurrencyCard onClick={handleClick}>
				<StyledIcon>
					<Icon name={`${code}Icon`} />
				</StyledIcon>
				<div>
					<StyledCurrencyTitle>{name}</StyledCurrencyTitle>
					<StyledCurrencyValue>
						R
						<Icon name={`${base}Icon`} /> = {value.toFixed(2)}
					</StyledCurrencyValue>
				</div>
			</StyledCurrencyCard>
			{isPopUpOpened && <PopUp handleClose={handleClose} code={code} />}
		</>
	)
}

export default CurrencyCard
