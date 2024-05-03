import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { getColors } from 'src/utils/themeGetters'

export const CurrencyComp = styled.button`
	display: flex;
	gap: 29px;
	border: 1px solid ${(props) => getColors(props).cardBorder};
	border-radius: 8px;
	padding: 30px 32px;
	width: 520px;
	height: 153px;
	background-color: ${(props) => getColors(props).cardBg};
	color: ${(props) => getColors(props).textPrimary};

	@media ${device.lg} {
		gap: 20px;
		padding: 20px;
		height: auto;
		width: 48%;
	}

	@media ${device.md} {
		width: 100%;
	}

	@media ${device.sm} {
		padding: 9px 12px;
		border-radius: 3px;
		gap: 12px;
	}
`

export const CurrencyIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 80px;
	border-radius: 8px;
	background-color: ${(props) => getColors(props).icon};
	@media ${device.lg} {
		width: 55px;
		height: 55px;
	}

	@media ${device.sm} {
		width: 30px;
		height: 30px;
		border-radius: 3px;
	}

	& > svg {
		width: 50px;
		height: 50px;

		@media ${device.lg} {
			width: 35px;
			height: 35px;
		}

		@media ${device.sm} {
			width: 18px;
			height: 18px;
		}
	}
`

export const CurrencyTitle = styled.p`
	font-weight: 400;
	font-size: 35px;
	line-height: 115%;
	color: ${(props) => getColors(props).textSecondary};
	margin-bottom: 9px;

	@media ${device.lg} {
		font-size: 22px;
		margin-bottom: 0;
	}

	@media ${device.sm} {
		font-size: 13px;
	}
`

export const CurrencyValue = styled.p`
	display: flex;
	align-items: flex-end;
	font-weight: 300;
	font-size: 32px;
	line-height: 129%;
	color: ${(props) => getColors(props).textTertiary};

	@media ${device.lg} {
		font-size: 22px;
	}

	@media ${device.sm} {
		font-size: 13px;
	}

	& > svg {
		width: 25px;
		height: 25px;

		@media ${device.sm} {
			width: 12px;
			height: 12px;
		}
	}
`
