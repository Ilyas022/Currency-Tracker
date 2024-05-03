import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { getColors } from 'utils/themeGetters'

const smallScreenEnd = '1024px'

export const PopUpComp = styled.div`
	position: fixed;
	z-index: 5;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: ${(props) => getColors(props).popUpBg};
`

export const PopUpContainer = styled.div`
	position: relative;
	width: 50%;
	padding: 0 20px;
	background-color: gray;
	border-radius: 8px;

	@media (max-width: ${smallScreenEnd}) {
		width: 70%;
	}

	@media ${device.sm} {
		width: 90%;
	}
`

export const PopUpHeader = styled.div`
	padding: 20px 0;
	border-bottom: 1px solid black;

	& > p {
		font-size: 28px;
		line-height: 120%;
		text-align: center;

		@media ${device.md} {
			font-size: 20px;
		}

		@media ${device.sm} {
			font-size: 18px;
		}
	}
`

export const PopUpBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	font-size: 20px;
	line-height: 120%;
	padding: 20px 0;

	@media ${device.md} {
		font-size: 16px;
	}

	@media ${device.sm} {
		font-size: 14px;
	}
`

export const ExchangeItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 5px;
	border-bottom: 1px dashed ${(props) => getColors(props).primary};
`

export const CloseBtn = styled.button`
	position: absolute;
	right: 20px;
	top: 22px;
	width: 32px;
	height: 32px;
	opacity: 0.5;
	transition: opacity 0.3s ease 0s;

	@media ${device.md} {
		top: 17px;
	}

	&:hover {
		opacity: 1;
	}

	&:before,
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		height: 100%;
		width: 2px;
		background-color: ${(props) => getColors(props).primary};
	}
	&:before {
		transform: rotate(45deg);
	}
	&:after {
		transform: rotate(-45deg);
	}
`
