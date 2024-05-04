import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import {
	getColors,
	getIndents,
	getSizes,
	getFontWeights,
	getFonts,
	getlineHeights,
	getBorders,
	getGaps,
} from 'utils/themeGetters'

const smallScreenEnd = '1024px'

export const CurrencyList = styled.div`
	max-width: ${(props) => getSizes(props, 16, 5)};
	width: 100%;
	padding: 0 ${(props) => getIndents(props, 8)};
	margin: 0 auto;

	@media (max-width: ${smallScreenEnd}) {
		padding: 0 ${(props) => getIndents(props, 4, 6)};
	}

	@media ${device.sm} {
		padding: 0 ${(props) => getIndents(props, 4, 3)};
	}
`

export const ListTitle = styled.p`
	width: ${(props) => getSizes(props, 11, -20)};
	padding-bottom: ${(props) => getIndents(props, 5, 1)};
	border-bottom: 2px solid ${(props) => getColors(props).cardBorder};
	font-weight: ${(props) => getFontWeights(props, 0)};
	font-size: ${(props) => getFonts(props, 5, 2)};
	line-height: ${(props) => getlineHeights(props, 6, -21)};
	color: ${(props) => getColors(props).textPrimary};
	margin-bottom: ${(props) => getIndents(props, 6, -6)};

	@media ${device.lg} {
		width: 48%;
	}

	@media ${device.md} {
		width: 100%;
	}

	@media ${device.sm} {
		font-size: ${(props) => getFonts(props, 0, -2)};
		padding-bottom: ${(props) => getIndents(props, 1, 3)};
		border-width: ${(props) => getBorders(props, 0)};
		margin-bottom: ${(props) => getIndents(props, 3)};
	}
`
export const ListContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	row-gap: ${(props) => getGaps(props, 5, 16)};

	@media ${device.lg} {
		row-gap: ${(props) => getGaps(props, 4, 5)};
	}

	@media ${device.sm} {
		row-gap: ${(props) => getGaps(props, 2, -1)};
	}
`
