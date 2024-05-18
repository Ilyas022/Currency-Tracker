import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import {
	getColors,
	getFonts,
	getGaps,
	getIndents,
	getSizes,
	getlineHeights,
} from 'utils/themeGetters'

const descriptionFontSize = '25px'
const descriptionLineHeight = '187%'

export const IntroComp = styled.div`
	width: 100%;
	height: ${(props) => getSizes(props, 10, -28)};
	margin: 0 auto ${(props) => getIndents(props, 6, 9)};
	background: ${({ theme }) => theme.colors.primaryBgGradient};

	@media ${device.lg} {
		height: auto;
		margin-bottom: ${(props) => getIndents(props, 5, -4)};
	}
`

export const IntroContainer = styled.div`
	display: flex;
	gap: ${(props) => getGaps(props, 0, -1)};
	max-width: ${(props) => getSizes(props, 16, -49)};
	margin: 0 auto;
	padding-top: ${(props) => getIndents(props, 5, -6)};

	@media ${device.lg} {
		justify-content: center;
		padding: ${(props) => getIndents(props, 5, -6)};
	}

	@media ${device.xs} {
		padding: ${(props) => getIndents(props, 3)} 0 ${(props) => getIndents(props, 2)};
	}

	& > svg {
		margin-top: 11px;
		width: ${(props) => getSizes(props, 9, -49)};
		height: ${(props) => getSizes(props, 9, -36)};

		@media ${device.lg} {
			width: ${(props) => getSizes(props, 8, -5)};
			height: ${(props) => getSizes(props, 8, -25)};
		}
	}
`

export const IntroInfo = styled.div`
	flex-basis: ${(props) => getSizes(props, 13, -18)};
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media ${device.lg} {
		align-items: center;
	}
`

export const Text = styled.p`
	text-align: center;
	align-self: flex-end;
	max-width: ${(props) => getSizes(props, 9, 39)};
	font-weight: ${({ theme }) => theme.fontWeights[0]};
	font-size: ${descriptionFontSize};
	line-height: ${descriptionLineHeight};
	color: ${(props) => getColors(props).textSecondary};

	@media ${device.lg} {
		align-self: auto;
	}

	@media ${device.sm} {
		font-size: ${(props) => getFonts(props, 0, -2)};
		max-width: 60%;
	}
`

export const Title = styled.h1`
	padding-left: ${(props) => getIndents(props, 3, 1)};
	margin-bottom: ${(props) => getIndents(props, 2)};

	font-weight: ${({ theme }) => theme.fontWeights[3]};
	font-size: ${(props) => getFonts(props, 8, 20)};
	line-height: ${(props) => getlineHeights(props, 5, 2)};
	text-align: right;
	background: ${({ theme }) => theme.colors.textGradient};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media ${device.lg} {
		text-align: center;
		padding-left: 0px;
		line-height: ${(props) => getlineHeights(props, 5, 8)};
	}

	@media ${device.md} {
		font-size: ${(props) => getFonts(props, 8, -1)};
		line-height: ${(props) => getlineHeights(props, 5, 8)};
	}

	@media ${device.sm} {
		font-size: ${(props) => getFonts(props, 6)};
		line-height: ${(props) => getlineHeights(props, 5, 3)};
	}
`

export const TitleItem = styled.span`
	display: block;

	&:first-child {
		padding-right: ${(props) => getIndents(props, 6, -5)};

		@media ${device.lg} {
			padding-right: 0px;
		}
	}

	&:last-child {
		font-size: ${(props) => getFonts(props, 8, 34)};
		padding-right: ${(props) => getIndents(props, 5, 1)};
		line-height: ${(props) => getlineHeights(props, 5, -2)};

		@media ${device.lg} {
			padding-right: 0px;
			font-size: inherit;
			line-height: inherit;
		}
	}
`
