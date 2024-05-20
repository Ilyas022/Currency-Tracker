import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectCurrency } from 'store/selectors/currencySelectors'

import { Icon, Text, UpdateTimeComp } from './styled'

function UpdateTime() {
	const { updatedAt } = useTypedSelector(selectCurrency)
	const date = new Date(updatedAt)
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const day = date.getDate()
	const monthName = date.toLocaleString('en', { month: 'long' })

	return (
		<UpdateTimeComp>
			<Icon />
			<Text>Last updated at: {`${hours} ${minutes}, ${day} ${monthName}`}</Text>
		</UpdateTimeComp>
	)
}

export default UpdateTime
