import styled from 'styled-components'

import { device } from 'constants/breakpoints'

export const TimelinePageComp = styled.div`
	width: 100%;
	padding: 0 20px;
	max-width: 1200px;
	margin: 0 auto;
`

export const TimelineContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	font-size: 30px;
	line-height: 120%;

	@media ${device.md} {
		font-size: 20px;
	}

	@media ${device.sm} {
		font-size: 14px;
		gap: 20px;
	}
`

export const TimelineSelects = styled.div`
	display: flex;
	gap: 50px;
	padding-left: 5px;
	& > div {
		width: 30%;
	}
`

export const TimelineTitle = styled.h2<{ $textalign?: string }>`
	padding-left: 5px;
	text-align: ${(props) => props.$textalign || 'center'};
`
