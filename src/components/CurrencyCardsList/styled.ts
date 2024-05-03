import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { getColors } from 'src/utils/themeGetters'

const smallScreenEnd = '1024px'

export const CurrencyList = styled.div`
	max-width: 1405px;
	width: 100%;
	padding: 0 80px;
	margin: 0 auto;

	@media (max-width: ${smallScreenEnd}) {
		padding: 0 30px;
	}

	@media ${device.sm} {
		padding: 0 27px;
	}
`

export const ListTitle = styled.p`
	width: 520px;
	padding-bottom: 25px;
	border-bottom: 2px solid ${(props) => getColors(props).cardBorder};
	font-weight: 300;
	font-size: 32px;
	line-height: 129%;
	color: ${(props) => getColors(props).textPrimary};
	margin-bottom: 50px;

	@media ${device.lg} {
		width: 48%;
	}

	@media ${device.md} {
		width: 100%;
	}

	@media ${device.sm} {
		font-size: 12px;
		padding-bottom: 11px;
		border-width: 1px;
		margin-bottom: 20px;
	}
`
export const ListContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	row-gap: 56px;

	@media ${device.lg} {
		row-gap: 35px;
	}

	@media ${device.sm} {
		row-gap: 19px;
	}
`
