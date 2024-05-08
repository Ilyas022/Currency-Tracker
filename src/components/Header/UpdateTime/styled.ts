import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { getColors } from 'utils/themeGetters'

const fontSize = '33px'
const lineHeight = '125%'

export const UpdateTimeComp = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	font-weight: ${({ theme }) => theme.fontWeights[0]};
	font-size: ${fontSize};
	line-height: ${lineHeight};
	color: ${(props) => getColors(props).textSecondary};

	@media ${device.md} {
		font-size: 20px;
		line-height: 120%;
	}

	@media ${device.sm} {
		font-size: 14px;
	}

	& > span {
		position: relative;
		display: inline-block;
		width: 33px;
		height: 33px;
		border-radius: 50%;
		background-color: ${(props) => getColors(props).iconBg};
		transform: translate(-16px, -3px);

		@media ${device.md} {
			transform: none;
			width: 25px;
			height: 25px;
		}

		@media ${device.xs} {
			width: 16px;
			height: 16px;
		}

		&:before {
			content: '';
			height: 16px;
			width: 16px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 50%;
			background-color: ${(props) => getColors(props).icon};

			@media ${device.md} {
				width: 12px;
				height: 12px;
			}

			@media ${device.xs} {
				width: 8px;
				height: 8px;
			}
		}
	}
`
