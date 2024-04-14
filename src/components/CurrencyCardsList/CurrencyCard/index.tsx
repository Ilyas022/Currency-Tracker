import { Icon } from 'src/components/Icon'

import { StyledCurrencyCard, StyledCurrencyTitle, StyledCurrencyValue, StyledIcon } from './styled'

interface ICurrencyCard {
	name: string
	value: number
	code: string
}

function CurrencyCard({ code, name, value }: ICurrencyCard) {
	return (
		<StyledCurrencyCard>
			<StyledIcon>
				<Icon name={`${code}Icon`} />
			</StyledIcon>
			<div>
				<StyledCurrencyTitle>{name}</StyledCurrencyTitle>
				<StyledCurrencyValue>R$ {value.toFixed(2)}</StyledCurrencyValue>
			</div>
		</StyledCurrencyCard>
	)
}

export default CurrencyCard
