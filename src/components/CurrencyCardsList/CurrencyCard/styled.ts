import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import {
	getBorders,
	getBordersRadii,
	getColors,
	getFontWeights,
	getFonts,
	getGaps,
	getIndents,
	getSizes,
	getlineHeights,
} from 'utils/themeGetters'

export const CurrencyComp = styled.button`
	display: flex;
	gap: ${(props) => getGaps(props, 4, -1)};
	border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).cardBorder};
	border-radius: ${(props) => getBordersRadii(props, 4)};
	padding: ${(props) => getIndents(props, 4, 6)} ${(props) => getIndents(props, 4, 8)};
	width: ${(props) => getSizes(props, 11, -20)};
	height: ${(props) => getSizes(props, 7, 13)};
	background-color: ${(props) => getColors(props).cardBg};
	color: ${(props) => getColors(props).textPrimary};

	@media ${device.lg} {
		gap: ${(props) => getGaps(props, 2)};
		padding: ${(props) => getIndents(props, 3)};
		height: auto;
		width: 48%;
	}

	@media ${device.md} {
		width: 100%;
	}

	@media ${device.sm} {
		padding: ${(props) => getIndents(props, 1, 1)};
		${(props) => getIndents(props, 1, 4)};
		border-radius: ${(props) => getBordersRadii(props, 2)};
		gap: ${(props) => getGaps(props, 0, 4)};
	}
`

export const CurrencyIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${(props) => getSizes(props, 3, 8)};
	height: ${(props) => getSizes(props, 3, 8)};
	border-radius: ${(props) => getBordersRadii(props, 4)};
	background-color: ${(props) => getColors(props).icon};

	@media ${device.lg} {
		width: ${(props) => getSizes(props, 2, 7)};
		height: ${(props) => getSizes(props, 2, 7)};
	}

	@media ${device.sm} {
		width: ${(props) => getSizes(props, 1, -2)};
		height: ${(props) => getSizes(props, 1, -2)};
		border-radius: ${(props) => getBordersRadii(props, 2)};
	}

	& > svg {
		width: ${(props) => getSizes(props, 2, 2)};
		height: ${(props) => getSizes(props, 2, 2)};

		@media ${device.lg} {
			width: ${(props) => getSizes(props, 1, 3)};
			height: ${(props) => getSizes(props, 1, 3)};
		}

		@media ${device.sm} {
			width: ${(props) => getSizes(props, 0, -6)};
			height: ${(props) => getSizes(props, 0, -6)};
		}
	}
`

export const CurrencyContainer = styled.div``

export const CurrencyTitle = styled.p`
	font-weight: ${(props) => getFontWeights(props, 1)};
	font-size: ${(props) => getFonts(props, 5, 5)};
	line-height: ${(props) => getlineHeights(props, 5, 3)};
	color: ${(props) => getColors(props).textSecondary};
	margin-bottom: ${(props) => getIndents(props, 1, 1)};

	@media ${device.lg} {
		font-size: ${(props) => getFonts(props, 3)};
		margin-bottom: 0;
	}

	@media ${device.sm} {
		font-size: ${(props) => getFonts(props, 0, -1)};
	}
`

export const CurrencyValue = styled.p`
	display: flex;
	align-items: flex-end;
	font-weight: ${(props) => getFontWeights(props, 0)};
	font-size: ${(props) => getFonts(props, 5, 2)};
	line-height: ${(props) => getlineHeights(props, 6, -21)};
	color: ${(props) => getColors(props).textTertiary};

	@media ${device.lg} {
		font-size: ${(props) => getFonts(props, 3)};
	}

	@media ${device.sm} {
		font-size: ${(props) => getFonts(props, 0, -1)};
	}

	& > svg {
		width: ${(props) => getSizes(props, 0, 1)};
		height: ${(props) => getSizes(props, 0, 1)};

		@media ${device.sm} {
			width: ${(props) => getSizes(props, 0, -12)};
			height: ${(props) => getSizes(props, 0, -12)};
		}
	}
`
