import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { getColors } from 'utils/themeGetters'

export const ToggleLabel = styled.label`
	position: relative;
	display: inline-block;
	width: 50px;
	height: 25px;
	margin-top: 5px;

	@media ${device.lg} {
		margin-top: 0px;
	}

	@media ${device.sm} {
		width: 40px;
		height: 20px;
	}

	@media ${device.xs} {
		width: 30px;
		height: 15px;
	}
`
export const ToggleInput = styled.input`
	display: none;

	&:checked + span::before {
		transform: translateX(25px);
		background-color: ${(props) => getColors(props).dark};

		@media ${device.sm} {
			transform: translateX(20px);
		}

		@media ${device.xs} {
			transform: translateX(15px);
		}
	}
`

export const ToggleSpan = styled.span`
	position: absolute;
	cursor: pointer;
	background-color: transparent;
	border: 1px solid ${(props) => getColors(props).textPrimary};
	border-radius: 25px;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	transition: background-color 0.2s ease;
	&::before {
		content: '';
		position: absolute;
		top: -1px;
		left: -1px;
		width: 25px;
		height: 25px;
		background-color: ${(props) => getColors(props).primary};
		border: 1px solid ${(props) => getColors(props).textPrimary};
		border-radius: 50%;
		transition: transform 0.3s ease;

		@media ${device.sm} {
			width: 20px;
			height: 20px;
		}

		@media ${device.xs} {
			width: 15px;
			height: 15px;
		}
	}
`
