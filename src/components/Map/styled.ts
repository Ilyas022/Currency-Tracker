import { Marker, Popup } from 'react-map-gl'
import styled from 'styled-components'

import { device } from 'constants/breakpoints'

export const StyledMap = styled.div`
	max-width: 1480px;
	width: 100%;
	padding: 0 20px;
	margin: 0 auto;
`

export const StyledMapContainer = styled.div`
	margin: 0 auto 40px;
	max-width: 600px;
	width: 100%;

	& > h2 {
		font-size: 38px;
		margin-bottom: 40px;
		text-align: center;

		@media ${device.md} {
			font-size: 20px;
		}
	}
`

export const StyledMapPopUp = styled(Popup)`
	color: black;
	& > :last-child {
		padding: 20px;
		font-size: 16px;

		& > button {
			font-size: 20px;
		}
	}
`

export const StyledMapItem = styled.div`
	width: 100%;
	height: 800px;

	@media ${device.lg} {
		width: 90%;
		height: 400px;
		margin: 0 auto;
	}

	@media ${device.sm} {
		height: 300px;
	}
`

export const StyledMapMarker = styled(Marker)`
	cursor: pointer;
`
