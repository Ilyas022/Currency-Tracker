import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import {
	getBordersRadii,
	getColors,
	getFonts,
	getGaps,
	getIndents,
	getSizes,
	getlineHeights,
} from 'utils/themeGetters'

export const TimelinePageComp = styled.div`
	width: 100%;
	padding: 0 ${(props) => getIndents(props, 3)};
	max-width: ${(props) => getSizes(props, 14, 100)};
	margin: 0 auto;
`

export const TimelineContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(props) => getGaps(props, 4)};
	font-size: ${(props) => getFonts(props, 5)};
	line-height: ${(props) => getlineHeights(props, 5, 8)};

	@media ${device.md} {
		font-size: ${(props) => getFonts(props, 2)};
	}

	@media ${device.sm} {
		font-size: ${(props) => getFonts(props, 0)};
		gap: ${(props) => getGaps(props, 2)};
	}
`

export const TimelineSelects = styled.div`
	display: flex;
	gap: ${(props) => getGaps(props, 5, 10)};
	padding-left: ${(props) => getIndents(props, 0, 1)};

	@media ${device.sm} {
		flex-direction: column;
		gap: ${(props) => getGaps(props, 0, 2)};
		padding-left: 0;
	}

	& > div {
		width: 20%;

		@media ${device.sm} {
			width: 40%;
		}
	}
`

export const TimelineTitle = styled.h2<{ $textalign?: string }>`
	font-size: ${(props) => getFonts(props, 2)};
	padding-left: ${(props) => getIndents(props, 0, 1)};
	text-align: ${(props) => props.$textalign || 'center'};
`

export const CustomChartBtn = styled.label`
	display: flex;
	align-items: center;
	gap: ${(props) => getGaps(props, 0, 2)};

	& > input {
		height: ${(props) => getSizes(props, 0)};
		width: ${(props) => getSizes(props, 0)};
		accent-color: ${(props) => getColors(props).btn};
	}
`

export const AddDataBtn = styled.button`
	color: ${(props) => getColors(props).textPrimary};
	background-color: ${(props) => getColors(props).btn};
	padding: ${(props) => getIndents(props, 2, -2)};
	border-radius: ${(props) => getBordersRadii(props, 4)};
`
