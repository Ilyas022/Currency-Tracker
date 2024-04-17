import styled from 'styled-components'

import { device } from 'constants/breakpoints'

export const StyledCurrencyCard = styled.button`
	display: flex;
	gap: 29px;
	border: 1px solid #474747;
	border-radius: 8px;
	padding: 30px 32px;
	width: 520px;
	height: 153px;
	background-color: #202025;

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

export const StyledIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 80px;
	border-radius: 8px;
	background-color: green;

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

export const StyledCurrencyTitle = styled.p`
	font-weight: 400;
	font-size: 35px;
	line-height: 115%;
	color: #d9d9d9;
	margin-bottom: 9px;

	@media ${device.lg} {
		font-size: 22px;
		margin-bottom: 0;
	}

	@media ${device.sm} {
		font-size: 13px;
	}
`

export const StyledCurrencyValue = styled.p`
	display: flex;
	align-items: flex-end;
	font-weight: 300;
	font-size: 32px;
	line-height: 129%;
	color: #a7b2c3;

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
