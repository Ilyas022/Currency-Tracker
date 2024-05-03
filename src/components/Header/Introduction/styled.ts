import styled from 'styled-components'

import { device } from 'src/constants/breakpoints'
import { getColors } from 'src/utils/themeGetters'

const titleFontSize = '76px'
const titleLineHeight = '114px'

const subTitleFontSize = '90px'
const subTitleLineHeight = '110%'

const descriptionFontSize = '25px'
const descriptionLineHeight = '187%'

export const IntroComp = styled.div`
	width: 100%;
	height: 417px;
	margin: 0 auto 65px;
	background: ${({ theme }) => theme.colors.primaryBgGradient};

	@media ${device.lg} {
		height: auto;
		margin-bottom: 36px;
	}
`

export const IntroContainer = styled.div`
	display: flex;
	gap: 7px;
	max-width: 1351px;
	margin: 0 auto;
	padding-top: 34px;

	@media ${device.lg} {
		justify-content: center;
		padding: 34px;
	}

	@media ${device.xs} {
		padding: 20px 0 16px;
	}

	& > svg {
		margin-top: 11px;
		width: 301px;
		height: 314px;

		@media ${device.lg} {
			width: 250px;
			height: 230px;
		}
	}
`
export const IntroInfo = styled.div`
	flex-basis: 772px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media ${device.lg} {
		align-items: center;
	}

	& > h1 {
		padding-left: 21px;
		margin-bottom: 16px;

		font-weight: ${({ theme }) => theme.fontWeights[3]};
		font-size: ${titleFontSize};
		line-height: ${titleLineHeight};
		text-align: right;
		background: ${({ theme }) => theme.colors.textGradient};
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		@media ${device.lg} {
			text-align: center;
			padding-left: 0px;
			line-height: 120%;
		}

		@media ${device.md} {
			font-size: 55px;
			line-height: 120%;
		}

		@media ${device.sm} {
			font-size: 38px;
			line-height: 115%;
		}

		& > span {
			display: block;
		}
		& > span:first-child {
			padding-right: 51px;

			@media ${device.lg} {
				padding-right: 0px;
			}
		}

		& > span:last-child {
			font-size: ${subTitleFontSize};
			padding-right: 41px;
			line-height: ${subTitleLineHeight};

			@media ${device.lg} {
				padding-right: 0px;
				font-size: inherit;
				line-height: inherit;
			}
		}
	}

	& > p {
		text-align: center;
		align-self: flex-end;
		max-width: 389px;
		font-weight: ${({ theme }) => theme.fontWeights[0]};
		font-size: ${descriptionFontSize};
		line-height: ${descriptionLineHeight};
		color: ${(props) => getColors(props).textSecondary};

		@media ${device.lg} {
			align-self: auto;
		}

		@media ${device.sm} {
			font-size: 12px;
			max-width: 60%;
		}
	}
`
