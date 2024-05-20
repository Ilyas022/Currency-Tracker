import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { getColors, getFonts, getGaps, getSizes, getlineHeights } from 'utils/themeGetters'

export const UpdateTimeComp = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${(props) => getGaps(props, 0, 2)};
	font-weight: ${({ theme }) => theme.fontWeights[0]};
	font-size: ${(props) => getFonts(props, 5, 3)};
	line-height: ${(props) => getlineHeights(props, 5, 13)};
	color: ${(props) => getColors(props).textSecondary};

	@media ${device.md} {
		font-size: ${(props) => getFonts(props, 2)};
		line-height: ${(props) => getlineHeights(props, 5, 8)};
	}

	@media ${device.sm} {
		font-size: ${(props) => getFonts(props, 0)};
	}
`

export const Icon = styled.span`
	position: relative;
	display: inline-block;
	width: ${(props) => getSizes(props, 1, 1)};
	height: ${(props) => getSizes(props, 1, 1)};
	border-radius: 50%;
	background-color: ${(props) => getColors(props).iconBg};
	transform: translate(
		${(props) => getSizes(props, 0, -40)},
		${(props) => getSizes(props, 0, -27)}
	);

	@media ${device.md} {
		transform: none;
		width: ${(props) => getSizes(props, 0, 1)};
		height: ${(props) => getSizes(props, 0, 1)};
	}

	@media ${device.xs} {
		width: ${(props) => getSizes(props, 0, -8)};
		height: ${(props) => getSizes(props, 0, -8)};
	}

	&:before {
		content: '';
		height: ${(props) => getSizes(props, 0, -8)};
		width: ${(props) => getSizes(props, 0, -8)};
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background-color: ${(props) => getColors(props).icon};

		@media ${device.md} {
			width: ${(props) => getSizes(props, 0, -12)};
			height: ${(props) => getSizes(props, 0, -12)};
		}

		@media ${device.xs} {
			width: ${(props) => getSizes(props, 0, -16)};
			height: ${(props) => getSizes(props, 0, -16)};
		}
	}
`

export const Text = styled.p``
